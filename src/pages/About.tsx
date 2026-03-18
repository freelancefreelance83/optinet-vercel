import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import logo from "@/assets/on-monogram.png";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", text: "Fournir des solutions réseau et informatiques innovantes, fiables et sur mesure pour accompagner la croissance de nos clients." },
  { icon: Eye, title: "Vision", text: "Devenir le partenaire technologique de référence pour les entreprises qui souhaitent une infrastructure performante et sécurisée." },
  { icon: Heart, title: "Valeurs", text: "Excellence technique, réactivité, transparence et engagement envers la satisfaction client guident chacune de nos interventions." },
];

const AboutPage = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="OptiNet" className="h-20 w-20" />
        </div>
        <SectionTitle
          title="Qui sommes-nous"
          subtitle="OptiNet, votre partenaire de confiance en solutions réseau et informatique."
        />

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-muted-foreground leading-relaxed text-center">
            Fondée par des passionnés de technologie, OptiNet accompagne les entreprises dans la conception,
            le déploiement et la maintenance de leurs infrastructures réseau et informatiques. Notre équipe
            d'experts certifiés met son savoir-faire au service de votre performance, en proposant des
            solutions adaptées à chaque besoin et à chaque budget. De la PME au grand compte, nous nous
            engageons à fournir un service d'excellence et un accompagnement personnalisé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {values.map((v, i) => (
            <div key={i} className="text-center bg-card rounded-lg p-8 shadow-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-3">Notre Équipe</h3>
          <p className="text-muted-foreground leading-relaxed">
            Une équipe de techniciens et ingénieurs certifiés, unis par la passion de la technologie
            et le souci du travail bien fait. Chaque membre apporte son expertise pour vous offrir
            les meilleures solutions.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
