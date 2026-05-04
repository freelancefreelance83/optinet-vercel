import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionTitle from "@/components/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      <SEO
        title="Nos Services"
        description="Installation réseau, câblage fibre optique, sécurité électronique, maintenance informatique et télécommunications à Dakar, Sénégal."
        path="/services"
      />

      {/* Hero Banner */}
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-20">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            Nos Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="opacity-80 max-w-2xl mx-auto text-lg"
          >
            Des solutions complètes pour répondre à tous vos besoins en infrastructure réseau, sécurité et informatique.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="space-y-12">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-64 w-full rounded-xl" />
                ))
              : services?.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-card rounded-xl border border-border shadow-card overflow-hidden hover:shadow-elevated transition-all duration-300"
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
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {s.title}
                        </h3>
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
                  </motion.div>
                ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-10 bg-muted rounded-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-3">Besoin d'un service personnalisé ?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Contactez notre équipe pour un devis gratuit adapté à vos besoins.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6">
                Demander un devis
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
