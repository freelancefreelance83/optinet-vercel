import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import logo from "@/assets/on-monogram.png";
import teamPhoto from "@/assets/team-photo.jpg";
import { Target, Eye, Heart } from "lucide-react";

const values = [
{ icon: Target, title: "Mission", text: "Fournir des solutions réseau et informatiques innovantes, fiables et sur mesure pour accompagner la croissance de nos clients." },
{ icon: Eye, title: "Vision", text: "Devenir le partenaire technologique de référence pour les entreprises qui souhaitent une infrastructure performante et sécurisée." },
{ icon: Heart, title: "Valeurs", text: "Excellence technique, réactivité, transparence et engagement envers la satisfaction client guident chacune de nos interventions." }];


const teamMembers = [
{ name: "Karim Bensalem", role: "Fondateur & Directeur Technique", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face" },
{ name: "Laura Fontaine", role: "Responsable Projets Réseau", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face" },
{ name: "Thomas Moreau", role: "Ingénieur Sécurité", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face" },
{ name: "Amina El Fassi", role: "Technicienne Câblage & Fibre", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face" }];


const AboutPage = () =>
<Layout>
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="OptiNet" className="h-20 w-20" />
        </div>
        <SectionTitle
        title="Qui sommes-nous"
        subtitle="OptiNet, votre partenaire de confiance en solutions réseau et informatique." />
      

        {/* Présentation + photo équipe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          <div className="flex flex-col justify-center">
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
          </div>
          <div className="rounded-xl overflow-hidden shadow-elevated">
            <img alt="L'équipe OptiNet" className="w-full h-full object-cover" src="/lovable-uploads/d52a6f89-6d53-4422-b843-2c011055815f.png" />
          </div>
        </div>

        {/* Mission / Vision / Valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {values.map((v, i) =>
        <div key={i} className="text-center bg-card rounded-lg p-8 shadow-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
            </div>
        )}
        </div>

        {/* Équipe */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">Notre Équipe</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((m, i) =>
          <div key={i} className="text-center group">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 shadow-card group-hover:shadow-elevated transition-shadow">
                  <img src={m.avatar} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-semibold text-foreground text-sm">{m.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{m.role}</p>
              </div>
          )}
          </div>
        </div>
      </div>
    </section>
  </Layout>;


export default AboutPage;