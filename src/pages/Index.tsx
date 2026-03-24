import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import DotNetworkIcon from "@/components/DotNetworkIcon";
import heroImg from "@/assets/hero-network.jpg";
import ctaImg from "@/assets/cta-audit.jpg";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceCabling from "@/assets/service-cabling.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceTelecom from "@/assets/service-telecom.jpg";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    image: serviceNetwork,
    title: "Installation & Configuration Réseau",
    desc: "Conception et déploiement de réseaux performants adaptés à vos besoins professionnels.",
  },
  {
    image: serviceCabling,
    title: "Câblage & Infrastructure",
    desc: "Installation de câblage structuré cuivre et fibre optique pour une connectivité fiable.",
  },
  {
    image: serviceSecurity,
    title: "Sécurité Électronique",
    desc: "Systèmes de vidéosurveillance, contrôle d'accès et alarmes pour protéger vos locaux.",
  },
  {
    image: serviceMaintenance,
    title: "Maintenance Informatique & Support",
    desc: "Support technique réactif et maintenance préventive pour assurer la continuité de vos opérations.",
  },
  {
    image: serviceTelecom,
    title: "Télécommunications & Réseaux Sans Fil",
    desc: "Solutions Wi-Fi professionnelles et systèmes de télécommunication sur mesure.",
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

    {/* Services avec images */}
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
              className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold text-lg text-foreground">{s.title}</h3>
                  <DotNetworkIcon className="w-5 h-5 flex-shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* CTA avec image */}
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-gradient-primary text-primary-foreground flex items-center py-20 md:py-28">
          <div className="container lg:pl-16 lg:pr-8 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contactez-nous pour un audit gratuit
            </h2>
            <p className="opacity-80 mb-8 max-w-xl">
              Notre équipe d'experts analyse votre infrastructure et vous propose des solutions sur mesure.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-base font-semibold px-8 py-6">
                Contactez-nous
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src={ctaImg}
            alt="Consultation professionnelle"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
