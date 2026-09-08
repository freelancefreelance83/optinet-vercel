-- Roles infrastructure
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Allow admins to read contact submissions
GRANT SELECT ON public.contacts TO authenticated;

DROP POLICY IF EXISTS "Admins can view contact submissions" ON public.contacts;
CREATE POLICY "Admins can view contact submissions"
ON public.contacts FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Server-side validation of anonymous contact submissions
CREATE OR REPLACE FUNCTION public.validate_contact_submission()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.name := btrim(NEW.name);
  NEW.email := lower(btrim(NEW.email));
  NEW.message := btrim(NEW.message);
  NEW.phone := NULLIF(btrim(COALESCE(NEW.phone, '')), '');

  IF char_length(NEW.name) < 2 OR char_length(NEW.name) > 100 THEN
    RAISE EXCEPTION 'Invalid name length';
  END IF;

  IF char_length(NEW.email) > 255 OR NEW.email !~ '^[^@\s]+@[^@\s]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Invalid email address';
  END IF;

  IF NEW.phone IS NOT NULL AND (char_length(NEW.phone) > 30 OR NEW.phone !~ '^[0-9+()\s.-]{6,30}$') THEN
    RAISE EXCEPTION 'Invalid phone number';
  END IF;

  IF char_length(NEW.message) < 10 OR char_length(NEW.message) > 2000 THEN
    RAISE EXCEPTION 'Invalid message length';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS validate_contact_submission_trigger ON public.contacts;
CREATE TRIGGER validate_contact_submission_trigger
BEFORE INSERT OR UPDATE ON public.contacts
FOR EACH ROW EXECUTE FUNCTION public.validate_contact_submission();