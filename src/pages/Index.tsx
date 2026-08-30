import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionTitle from "@/components/SectionTitle";
import heroImg from "@/assets/hero-network.jpg";
import ctaImg from "@/assets/cta-audit.jpg";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceCabling from "@/assets/service-cabling.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceTelecom from "@/assets/service-telecom.jpg";
import { ArrowRight, Network, Cable, ShieldCheck, Wrench, Wifi, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    image: serviceNetwork,
    title: "Installation & Configuration Réseau",
    desc: "Conception et déploiement de réseaux performants adaptés à vos besoins professionnels.",
    icon: Network,
  },
  {
    image: serviceCabling,
    title: "Câblage & Infrastructure",
    desc: "Installation de câblage structuré cuivre et fibre optique pour une connectivité fiable.",
    icon: Cable,
  },
  {
    image: serviceSecurity,
    title: "Sécurité Électronique",
    desc: "Systèmes de vidéosurveillance, contrôle d'accès et alarmes pour protéger vos locaux.",
    icon: ShieldCheck,
  },
  {
    image: serviceMaintenance,
    title: "Maintenance Informatique & Support",
    desc: "Support technique réactif et maintenance préventive pour assurer la continuité de vos opérations.",
    icon: Wrench,
  },
  {
    image: serviceTelecom,
    title: "Télécommunications & Réseaux Sans Fil",
    desc: "Solutions Wi-Fi professionnelles et systèmes de télécommunication sur mesure.",
    icon: Wifi,
  },
];

const stats = [
  { value: "18", label: "Projets réalisés" },
  { value: "5", label: "Années d'expérience" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Index = () => (
  <Layout>
    <SEO
      title="Accueil"
      description="OptiNet, votre partenaire en réseau, sécurité électronique, câblage et maintenance informatique à Dakar, Sénégal. Solutions professionnelles sur mesure."
      path="/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "OptiNet",
        url: "https://optinetsn.lovable.app",
        logo: "https://optinetsn.lovable.app/lovable-uploads/f92c4c5a-5933-4230-bcf7-5a614d52a516.png",
        description: "Solutions réseau, sécurité et infrastructure IT à Dakar",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Maristes 2",
          addressLocality: "Dakar",
          addressCountry: "SN",
        },
        telephone: "+221769457549",
        email: "freelancefreelance83@gmail.com",
      }}
    />

    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Infrastructure réseau moderne"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 container text-center text-primary-foreground px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
        >
          OptiNet
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-xl md:text-2xl font-light mb-8 opacity-90"
        >
          Connecter. Sécuriser. Optimiser.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/services">
            <Button size="lg" variant="secondary" className="text-base font-semibold px-8 py-6">
              Découvrez nos services
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="text-base font-semibold px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Phone className="mr-2" size={18} />
              Nous contacter
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-primary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeUp}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-secondary">{stat.value}</p>
              <p className="text-primary-foreground/80 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <SectionTitle
          title="Nos Services"
          subtitle="Des solutions complètes pour votre infrastructure réseau et informatique."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeUp}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="text-secondary" size={18} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{s.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" size="lg" className="font-semibold">
              Voir tous nos services
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Pourquoi OptiNet */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionTitle
          title="Pourquoi choisir OptiNet ?"
          subtitle="Un partenaire fiable pour toutes vos solutions technologiques."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Expertise certifiée", desc: "Nos ingénieurs sont formés et certifiés sur les technologies de pointe du marché." },
            { title: "Réactivité 24/7", desc: "Une équipe disponible en permanence pour assurer la continuité de vos opérations." },
            { title: "Solutions sur mesure", desc: "Chaque projet est unique. Nous adaptons nos solutions à vos besoins spécifiques." },
            { title: "Tarifs compétitifs", desc: "Des solutions professionnelles accessibles, adaptées à tous les budgets." },
            { title: "Accompagnement complet", desc: "De l'audit initial à la maintenance, nous vous accompagnons à chaque étape." },
            { title: "Technologies modernes", desc: "Nous utilisons les dernières technologies pour garantir performance et sécurité." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeUp}
              className="flex gap-4"
            >
              <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA avec image */}
    <section className="relative overflow-hidden" aria-label="Appel à l'action">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-gradient-primary text-primary-foreground flex items-center py-20 md:py-28">
          <div className="container lg:pl-16 lg:pr-8 text-center lg:text-left">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Contactez-nous pour un audit gratuit
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="opacity-80 mb-8 max-w-xl"
            >
              Notre équipe d'experts analyse votre infrastructure et vous propose des solutions sur mesure.
            </motion.p>
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
            loading="lazy"
            width={960}
            height={640}
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
