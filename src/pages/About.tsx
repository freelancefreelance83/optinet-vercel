import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionTitle from "@/components/SectionTitle";
import teamPhoto from "@/assets/team-photo.jpg";
import aboutOffice from "@/assets/about-office.jpg";
import { Target, Eye, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const values = [
  { icon: Target, key: "mission" },
  { icon: Eye, key: "vision" },
  { icon: Heart, key: "values" },
] as const;




const AboutPage = () => {
  const { t } = useLanguage();
  return (
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
          {t("about.hero.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="opacity-80 max-w-2xl mx-auto text-lg"
        >
          {t("about.hero.subtitle")}
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
            <h3 className="text-2xl font-bold text-foreground mb-4">{t("about.history.title")}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.history.p1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.history.p2")}</p>
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
        <SectionTitle title={t("about.dna.title")} subtitle={t("about.dna.subtitle")} />
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
              <h3 className="font-bold text-lg text-foreground mb-2">{t(`about.${v.key}.title` as never)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(`about.${v.key}.text` as never)}</p>
            </motion.div>
        )}
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default AboutPage;