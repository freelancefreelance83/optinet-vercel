import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import DotNetworkIcon from "@/components/DotNetworkIcon";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";

const ServicesPage = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionTitle
            title="Nos Services"
            subtitle="Des solutions complètes pour répondre à tous vos besoins en infrastructure réseau, sécurité et informatique."
          />
          <div className="space-y-12">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-64 w-full rounded-xl" />
                ))
              : services?.map((s, i) => (
                  <div
                    key={s.id}
                    className="bg-card rounded-xl border border-border shadow-card overflow-hidden hover:shadow-elevated transition-shadow duration-300"
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                      <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                        <img
                          src={s.image_url || ""}
                          alt={s.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                      <div
                        className={`p-8 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-foreground">
                            {s.title}
                          </h3>
                          <DotNetworkIcon className="w-6 h-6 flex-shrink-0" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {s.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {s.features.map((f, j) => (
                            <span
                              key={j}
                              className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                            >
                              {f}
                            </span>
                          ))}
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

export default ServicesPage;
