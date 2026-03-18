import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import DotNetworkIcon from "@/components/DotNetworkIcon";
import heroImg from "@/assets/hero-network.jpg";
import { Network, Cable, ShieldCheck, Wrench, Wifi, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Network,
    title: "Installation & Configuration Réseau",
    desc: "Conception et déploiement de réseaux performants adaptés à vos besoins professionnels.",
  },
  {
    icon: Cable,
    title: "Câblage & Infrastructure",
    desc: "Installation de câblage structuré cuivre et fibre optique pour une connectivité fiable.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité Électronique",
    desc: "Systèmes de vidéosurveillance, contrôle d'accès et alarmes pour protéger vos locaux.",
  },
  {
    icon: Wrench,
    title: "Maintenance Informatique & Support",
    desc: "Support technique réactif et maintenance préventive pour assurer la continuité de vos opérations.",
  },
  {
    icon: Wifi,
    title: "Télécommunications & Réseaux Sans Fil",
    desc: "Solutions Wi-Fi professionnelles et systèmes de télécommunication sur mesure.",
  },
];

const testimonials = [
  {
    name: "Marie Dupont",
    company: "TechStart SAS",
    text: "OptiNet a transformé notre infrastructure réseau. Leur équipe est réactive, professionnelle et toujours à l'écoute de nos besoins.",
  },
  {
    name: "Jean-Pierre Martin",
    company: "Cabinet Martin & Associés",
    text: "Grâce à OptiNet, notre système de sécurité est enfin à la hauteur. Installation impeccable et suivi exemplaire.",
  },
  {
    name: "Sophie Laurent",
    company: "Hôtel Le Rivage",
    text: "Le Wi-Fi de notre établissement fonctionne parfaitement depuis l'intervention d'OptiNet. Nos clients sont ravis !",
  },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Infrastructure réseau moderne"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 container text-center text-primary-foreground px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in-up leading-tight">
          OptiNet
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Connecter. Sécuriser. Optimiser.
        </p>
        <Link to="/services">
          <Button size="lg" variant="secondary" className="text-base font-semibold px-8 py-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Découvrez nos services
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </section>

    {/* Services aperçu */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <SectionTitle
          title="Nos Services"
          subtitle="Des solutions complètes pour votre infrastructure réseau et informatique."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <s.icon className="text-primary-foreground" size={22} />
                </div>
                <DotNetworkIcon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Témoignages */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionTitle
          title="Témoignages"
          subtitle="Ce que nos clients disent de nous."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-lg p-6 shadow-card border border-border">
              <Quote className="text-secondary mb-4" size={28} />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
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

    {/* CTA */}
    <section className="py-20 md:py-28 bg-gradient-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Contactez-nous pour un audit gratuit
        </h2>
        <p className="opacity-80 mb-8 max-w-xl mx-auto">
          Notre équipe d'experts analyse votre infrastructure et vous propose des solutions sur mesure.
        </p>
        <Link to="/contact">
          <Button size="lg" variant="secondary" className="text-base font-semibold px-8 py-6">
            Contactez-nous
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
