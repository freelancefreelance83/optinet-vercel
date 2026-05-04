import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const BlogArticlePage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: article, isLoading } = useQuery({
    queryKey: ["blog_article", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_articles")
        .select("*")
        .eq("id", id!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  return (
    <Layout>
      {article && (
        <SEO
          title={article.title}
          description={article.excerpt}
          path={`/blog/${id}`}
          image={article.image_url || undefined}
          type="article"
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            author: { "@type": "Person", name: article.author },
            datePublished: article.published_at,
            image: article.image_url || undefined,
            publisher: {
              "@type": "Organization",
              name: "OptiNet",
            },
          }}
        />
      )}

      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Retour aux actualités
          </Link>

          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-64 w-full rounded-xl" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ) : article ? (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-1">
                  <User size={14} /> {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays size={14} />{" "}
                  {format(new Date(article.published_at), "d MMMM yyyy", {
                    locale: fr,
                  })}
                </span>
              </div>
              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full rounded-xl mb-8 object-cover max-h-[450px]"
                  width={800}
                  height={450}
                />
              )}
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line prose-headings:text-foreground prose-strong:text-foreground">
                {(article as any).content || article.excerpt}
              </div>

              {/* Back link bottom */}
              <div className="mt-12 pt-8 border-t border-border">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm text-secondary hover:underline font-medium"
                >
                  <ArrowLeft size={16} />
                  Voir tous les articles
                </Link>
              </div>
            </motion.article>
          ) : (
            <p className="text-muted-foreground">Article introuvable.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticlePage;
