import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import DotNetworkIcon from "@/components/DotNetworkIcon";
import { CalendarDays, User } from "lucide-react";

const articles = [
  {
    title: "Les tendances réseau en 2026 : SD-WAN et au-delà",
    excerpt: "Découvrez les technologies réseau qui transforment les entreprises cette année, du SD-WAN à la virtualisation réseau.",
    author: "Équipe OptiNet",
    date: "15 mars 2026",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    title: "Pourquoi la fibre optique est essentielle pour votre entreprise",
    excerpt: "La fibre optique offre des avantages considérables en termes de débit, fiabilité et évolutivité pour les PME.",
    author: "Équipe OptiNet",
    date: "8 mars 2026",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
  },
  {
    title: "5 bonnes pratiques pour sécuriser votre réseau Wi-Fi",
    excerpt: "Protégez votre réseau sans fil contre les intrusions avec ces conseils simples mais efficaces.",
    author: "Équipe OptiNet",
    date: "1 mars 2026",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop",
  },
];

const BlogPage = () => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <article
              key={i}
              className="bg-card rounded-lg overflow-hidden border border-border shadow-card hover:shadow-elevated transition-shadow duration-300 group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {a.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User size={14} /> {a.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} /> {a.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogPage;
