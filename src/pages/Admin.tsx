import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SiteImage from "@/components/SiteImage";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { SITE_IMAGES_BUCKET } from "@/lib/siteImages";
import { LogOut, Upload, Loader2 } from "lucide-react";

const NAMED_IMAGES = [
  { key: "team", label: "Photo de l'équipe" },
  { key: "about-office", label: "Photo des bureaux" },
];

const uploadFile = async (file: File, folder: string) => {
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage
    .from(SITE_IMAGES_BUCKET)
    .upload(path, file, { cacheControl: "3600", upsert: false });
  if (error) throw error;
  return path;
};

const AdminPage = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [busyKey, setBusyKey] = useState<string | null>(null);

  const { data: namedImages } = useQuery({
    queryKey: ["admin_site_images"],
    queryFn: async () => {
      const { data, error } = await supabase.from("site_images").select("*");
      if (error) throw error;
      return data;
    },
  });

  const { data: articles, isLoading } = useQuery({
    queryKey: ["admin_blog_articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_articles")
        .select("id, title, image_url")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const handleNamedUpload = async (key: string, file: File) => {
    setBusyKey(key);
    try {
      const path = await uploadFile(file, "site");
      const { error } = await supabase
        .from("site_images")
        .upsert({ key, storage_path: path }, { onConflict: "key" });
      if (error) throw error;
      queryClient.invalidateQueries({ queryKey: ["admin_site_images"] });
      queryClient.invalidateQueries({ queryKey: ["site_image", key] });
      toast({ title: "Image mise à jour" });
    } catch (e) {
      toast({
        title: "Échec de l'envoi",
        description: e instanceof Error ? e.message : "Réessayez.",
        variant: "destructive",
      });
    } finally {
      setBusyKey(null);
    }
  };

  const handleArticleUpload = async (id: string, file: File) => {
    setBusyKey(id);
    try {
      const path = await uploadFile(file, "blog");
      const { error } = await supabase.from("blog_articles").update({ image_url: path }).eq("id", id);
      if (error) throw error;
      queryClient.invalidateQueries({ queryKey: ["admin_blog_articles"] });
      queryClient.invalidateQueries({ queryKey: ["blog_articles"] });
      toast({ title: "Miniature mise à jour" });
    } catch (e) {
      toast({
        title: "Échec de l'envoi",
        description: e instanceof Error ? e.message : "Réessayez.",
        variant: "destructive",
      });
    } finally {
      setBusyKey(null);
    }
  };

  const UploadButton = ({
    id,
    busy,
    onFile,
  }: {
    id: string;
    busy: boolean;
    onFile: (file: File) => void;
  }) => (
    <label
      htmlFor={`file-${id}`}
      className="inline-flex items-center gap-2 text-sm font-medium text-secondary cursor-pointer hover:underline"
    >
      {busy ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
      Choisir une image
      <input
        id={`file-${id}`}
        type="file"
        accept="image/*"
        className="hidden"
        disabled={busy}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onFile(file);
          e.target.value = "";
        }}
      />
    </label>
  );

  return (
    <Layout>
      <SEO title="Administration" description="Gestion des images du site OptiNet." path="/admin" />
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Administration</h1>
              <p className="text-muted-foreground text-sm mt-1">Connecté en tant que {user?.email}</p>
            </div>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut size={14} className="mr-1.5" />
              Déconnexion
            </Button>
          </div>

          <h2 className="text-lg font-bold text-foreground mb-4">Images du site</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {NAMED_IMAGES.map((item) => {
              const current = namedImages?.find((i) => i.key === item.key);
              return (
                <div key={item.key} className="bg-card border border-border rounded-xl p-4 shadow-card">
                  <p className="font-medium text-foreground mb-3">{item.label}</p>
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-3">
                    <SiteImage
                      source={current?.storage_path}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <UploadButton
                    id={item.key}
                    busy={busyKey === item.key}
                    onFile={(file) => handleNamedUpload(item.key, file)}
                  />
                </div>
              );
            })}
          </div>

          <h2 className="text-lg font-bold text-foreground mb-4">Miniatures des articles</h2>
          <div className="space-y-4">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-24 w-full rounded-xl" />)
              : articles?.map((a) => (
                  <div
                    key={a.id}
                    className="bg-card border border-border rounded-xl p-4 shadow-card flex items-center gap-4"
                  >
                    <div className="w-28 h-20 rounded-lg overflow-hidden bg-muted shrink-0">
                      <SiteImage source={a.image_url} alt={a.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-foreground truncate">{a.title}</p>
                      <UploadButton
                        id={a.id}
                        busy={busyKey === a.id}
                        onFile={(file) => handleArticleUpload(a.id, file)}
                      />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminPage;
