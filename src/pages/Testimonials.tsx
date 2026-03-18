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
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    context: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop",
  },
  {
    name: "Jean-Pierre Martin",
    company: "Cabinet Martin & Associés",
    text: "Grâce à OptiNet, notre système de sécurité est enfin à la hauteur. Installation impeccable et suivi exemplaire. Je recommande vivement leurs services.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    context: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=400&h=200&fit=crop",
  },
  {
    name: "Sophie Laurent",
    company: "Hôtel Le Rivage",
    text: "Le Wi-Fi de notre établissement fonctionne parfaitement depuis l'intervention d'OptiNet. Nos clients sont ravis et la couverture est optimale dans tout l'hôtel.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    context: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop",
  },
  {
    name: "Ahmed Benali",
    company: "Logistics Pro",
    text: "Une équipe de professionnels qui comprend nos enjeux. La maintenance préventive nous a évité bien des problèmes. Un partenaire de confiance.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    context: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop",
  },
  {
    name: "Claire Fontaine",
    company: "École Internationale du Lac",
    text: "OptiNet a câblé l'ensemble de notre campus avec une qualité irréprochable. Le respect des délais et la propreté du chantier étaient remarquables.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    context: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=200&fit=crop",
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
        <div className="space-y-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1">
                  <img
                    src={t.context}
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
                        className={j < t.rating ? "text-secondary fill-secondary" : "text-muted"}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Airtable placeholder */}
        <div className="mt-16 bg-muted rounded-lg p-8 text-center max-w-4xl mx-auto">
          <p className="text-muted-foreground text-sm">
            📋 Cette section est prête à être connectée à Airtable pour un affichage dynamique des témoignages.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default TestimonialsPage;
