import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionTitle from "@/components/SectionTitle";
import teamPhoto from "@/assets/team-photo.jpg";
import aboutOffice from "@/assets/about-office.jpg";
import { Target, Eye, Heart } from "lucide-react";

const values = [
{ icon: Target, title: "Mission", text: "Fournir des solutions réseau et informatiques innovantes, fiables et sur mesure pour accompagner la croissance de nos clients." },
{ icon: Eye, title: "Vision", text: "Devenir le partenaire technologique de référence pour les entreprises qui souhaitent une infrastructure performante et sécurisée." },
{ icon: Heart, title: "Valeurs", text: "Excellence technique, réactivité, transparence et engagement envers la satisfaction client guident chacune de nos interventions." }];


const stats = [
{ value: "5 ans", label: "D'expérience" },
{ value: "18", label: "Projets réalisés" }
];


const AboutPage = () =>
<Layout>
    <SEO
      title="À propos"
      description="Découvrez OptiNet, votre partenaire de confiance en solutions réseau et informatique à Dakar, Sénégal. Expertise, réactivité et innovation."
      path="/a-propos"
    />

    {/* Hero */}
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutOffice} alt="" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>
      <div className="container relative z-10 text-center text-primary-foreground">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-4"
        >
          Qui sommes-nous
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="opacity-80 max-w-2xl mx-auto text-lg"
        >
          OptiNet, votre partenaire de confiance en solutions réseau et informatique.
        </motion.p>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">

        {/* Présentation + photo équipe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20" id="histoire">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Notre histoire</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fondée par des passionnés de technologie, OptiNet accompagne les entreprises dans la conception,
              le déploiement et la maintenance de leurs infrastructures réseau et informatiques.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre équipe d'experts certifiés met son savoir-faire au service de votre performance, en proposant des
              solutions adaptées à chaque besoin et à chaque budget. De la PME au grand compte, nous nous
              engageons à fournir un service d'excellence et un accompagnement personnalisé.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-elevated"
          >
            <img alt="L'équipe OptiNet" className="w-full h-full object-cover" src={teamPhoto} loading="lazy" width={800} height={600} />
          </motion.div>
        </div>

        {/* Mission / Vision / Valeurs */}
        <SectionTitle title="Notre ADN" subtitle="Les principes qui guident chacune de nos interventions." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {values.map((v, i) =>
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow"
        >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
            </motion.div>
        )}
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Notre Expérience" subtitle="Des résultats concrets à travers le Sénégal." />
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {stats.map((s, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center bg-card rounded-xl p-8 shadow-card border border-border"
          >
                <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{s.value}</p>
                <p className="text-muted-foreground font-medium">{s.label}</p>
              </motion.div>
          )}
          </div>
        </div>
      </div>
    </section>
  </Layout>;


export default AboutPage;