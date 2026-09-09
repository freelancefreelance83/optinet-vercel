import { supabase } from "@/integrations/supabase/client";

export const SITE_IMAGES_BUCKET = "site-images";

/** Returns a temporary readable URL for an object stored in the site-images bucket. */
export const getSiteImageUrl = async (storagePath: string): Promise<string | null> => {
  const { data, error } = await supabase.storage
    .from(SITE_IMAGES_BUCKET)
    .createSignedUrl(storagePath, 60 * 60 * 24);
  if (error) return null;
  return data?.signedUrl ?? null;
};

/** Resolves an image reference: full URLs are returned as-is, storage paths are signed. */
export const resolveImageSrc = async (value: string | null | undefined): Promise<string | null> => {
  if (!value) return null;
  if (/^https?:\/\//i.test(value) || value.startsWith("/")) return value;
  return getSiteImageUrl(value);
};

/** Fetches a named site image (e.g. "team") and returns a displayable URL. */
export const getNamedSiteImage = async (key: string): Promise<string | null> => {
  const { data } = await supabase
    .from("site_images")
    .select("storage_path")
    .eq("key", key)
    .maybeSingle();
  if (!data?.storage_path) return null;
  return getSiteImageUrl(data.storage_path);
};
