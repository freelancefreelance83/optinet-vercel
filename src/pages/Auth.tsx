import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2, LogIn } from "lucide-react";

const AuthPage = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const { session, signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) navigate("/admin", { replace: true });
  }, [session, navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || password.length < 6) {
      toast({
        title: "Champs invalides",
        description: "Renseignez un e-mail valide et un mot de passe d'au moins 6 caractères.",
        variant: "destructive",
      });
      return;
    }
    setBusy(true);
    const { error } =
      mode === "signin" ? await signIn(email.trim(), password) : await signUp(email.trim(), password);
    setBusy(false);
    if (error) {
      toast({ title: "Connexion impossible", description: error, variant: "destructive" });
      return;
    }
    if (mode === "signup") {
      toast({
        title: "Compte créé",
        description: "Vérifiez votre boîte mail pour confirmer votre adresse.",
      });
    }
  };

  return (
    <Layout>
      <SEO title="Espace administrateur" description="Connexion à l'espace d'administration OptiNet." path="/auth" />
      <section className="py-20 md:py-28">
        <div className="container max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Espace administrateur</h1>
          <p className="text-muted-foreground mb-8 text-sm">
            Accès réservé à l'équipe OptiNet.
          </p>
          <form onSubmit={submit} className="space-y-4 bg-card border border-border rounded-xl p-6 shadow-card">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={busy} className="w-full bg-gradient-primary text-primary-foreground font-semibold">
              {busy ? <Loader2 className="animate-spin mr-2" size={16} /> : <LogIn size={16} className="mr-2" />}
              {mode === "signin" ? "Se connecter" : "Créer un compte"}
            </Button>
            <button
              type="button"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="text-sm text-secondary hover:underline w-full text-center"
            >
              {mode === "signin" ? "Créer un compte" : "J'ai déjà un compte"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default AuthPage;
