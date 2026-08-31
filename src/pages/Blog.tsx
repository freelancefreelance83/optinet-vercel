import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionTitle from "@/components/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, User, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPage = () => {
  const { t, lang } = useLanguage();
  const { data: articles, isLoading } = useQuery({
    queryKey: ["blog_articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_articles")
        .select("*")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Actualités et conseils sur les réseaux, la sécurité informatique, la fibre optique et les télécommunications au Sénégal."
        path="/blog"
      />

      {/* Hero */}
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-20">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            {t("blog.hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="opacity-80 max-w-2xl mx-auto text-lg"
          >
            {t("blog.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-48 w-full rounded-xl" />
                ))
              : articles?.map((a) => (
                  <motion.div
                    key={a.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4 }}
                  >
                  <Link
                    to={`/blog/${a.id}`}
                    className="bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all duration-300 group cursor-pointer block h-full"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-5">
                      <div className="sm:col-span-2 aspect-video sm:aspect-auto overflow-hidden">
                        <img
                          src={a.image_url || ""}
                          alt={a.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          width={600}
                          height={400}
                        />
                      </div>
                      <div className="sm:col-span-3 p-6 flex flex-col justify-center">
                        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
                          {a.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                          {a.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User size={14} /> {a.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarDays size={14} />{" "}
                            {format(new Date(a.published_at), "d MMMM yyyy", {
                              locale: lang === "fr" ? fr : enUS,
                            })}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-secondary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                          {t("blog.read")} <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
