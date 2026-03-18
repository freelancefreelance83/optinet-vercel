import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import DotNetworkIcon from "@/components/DotNetworkIcon";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dupont",
    company: "TechStart SAS",
    text: "OptiNet a transformé notre infrastructure réseau. Leur équipe est réactive, professionnelle et toujours à l'écoute de nos besoins. Le réseau est fiable et performant depuis leur intervention.",
    rating: 5,
  },
  {
    name: "Jean-Pierre Martin",
    company: "Cabinet Martin & Associés",
    text: "Grâce à OptiNet, notre système de sécurité est enfin à la hauteur. Installation impeccable et suivi exemplaire. Je recommande vivement leurs services.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    company: "Hôtel Le Rivage",
    text: "Le Wi-Fi de notre établissement fonctionne parfaitement depuis l'intervention d'OptiNet. Nos clients sont ravis et la couverture est optimale dans tout l'hôtel.",
    rating: 5,
  },
  {
    name: "Ahmed Benali",
    company: "Logistics Pro",
    text: "Une équipe de professionnels qui comprend nos enjeux. La maintenance préventive nous a évité bien des problèmes. Un partenaire de confiance.",
    rating: 4,
  },
  {
    name: "Claire Fontaine",
    company: "École Internationale du Lac",
    text: "OptiNet a câblé l'ensemble de notre campus avec une qualité irréprochable. Le respect des délais et la propreté du chantier étaient remarquables.",
    rating: 5,
  },
];

const TestimonialsPage = () => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 shadow-card border border-border hover:shadow-elevated transition-shadow"
            >
              <Quote className="text-secondary mb-3" size={24} />
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className={j < t.rating ? "text-secondary fill-secondary" : "text-muted"}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default TestimonialsPage;
