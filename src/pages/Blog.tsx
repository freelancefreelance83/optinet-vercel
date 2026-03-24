import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import DotNetworkIcon from "@/components/DotNetworkIcon";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const BlogPage = () => {
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
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex items-center justify-center gap-3 mb-4">
            <DotNetworkIcon className="w-8 h-8" />
          </div>
          <SectionTitle
            title="Nos dernières actualités"
            subtitle="Restez informé des dernières tendances en matière de réseau, sécurité et technologies."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-48 w-full rounded-xl" />
                ))
              : articles?.map((a) => (
                  <Link
                    to={`/blog/${a.id}`}
                    key={a.id}
                    className="bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-shadow duration-300 group cursor-pointer"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-5">
                      <div className="sm:col-span-2 aspect-video sm:aspect-auto overflow-hidden">
                        <img
                          src={a.image_url || ""}
                          alt={a.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="sm:col-span-3 p-6 flex flex-col justify-center">
                        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
                          {a.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {a.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User size={14} /> {a.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarDays size={14} />{" "}
                            {format(new Date(a.published_at), "d MMMM yyyy", {
                              locale: fr,
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
