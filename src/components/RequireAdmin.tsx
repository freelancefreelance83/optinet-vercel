import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";

const RequireAdmin = ({ children }: { children: React.ReactNode }) => {
  const { session, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <Layout>
        <div className="py-32 flex justify-center">
          <Loader2 className="animate-spin text-secondary" />
        </div>
      </Layout>
    );
  }

  if (!session) return <Navigate to="/auth" replace />;

  if (!isAdmin) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container max-w-lg text-center">
            <h1 className="text-2xl font-bold text-foreground mb-3">Accès refusé</h1>
            <p className="text-muted-foreground">
              Votre compte n'a pas les droits d'administration nécessaires.
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  return <>{children}</>;
};

export default RequireAdmin;
