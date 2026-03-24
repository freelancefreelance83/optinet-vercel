import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import DotNetworkIcon from "@/components/DotNetworkIcon";
import { Skeleton } from "@/components/ui/skeleton";
import { Quote, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const TestimonialsPage = () => {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-10 right-10 opacity-5">
          <DotNetworkIcon className="w-64 h-64" />
        </div>
        <div className="container relative z-10">
          <SectionTitle
            title="Témoignages"
            subtitle="Découvrez ce que nos clients pensent de nos services."
          />
          <div className="space-y-8 max-w-4xl mx-auto">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-48 w-full rounded-xl" />
                ))
              : testimonials?.map((t) => (
                  <div
                    key={t.id}
                    className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-shadow"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-1">
                        <img
                          src={t.context_image_url || ""}
                          alt={`Contexte - ${t.company}`}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 md:p-8">
                        <Quote className="text-secondary mb-3" size={24} />
                        <p className="text-muted-foreground leading-relaxed mb-5 italic">
                          "{t.text}"
                        </p>
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star
                              key={j}
                              size={14}
                              className={
                                j < t.rating
                                  ? "text-secondary fill-secondary"
                                  : "text-muted"
                              }
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-3">
                          <img
                            src={t.avatar_url || ""}
                            alt={t.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold text-foreground">
                              {t.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {t.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;
