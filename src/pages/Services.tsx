import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import DotNetworkIcon from "@/components/DotNetworkIcon";
import { Network, Cable, ShieldCheck, Wrench, Wifi } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Installation & Configuration Réseau",
    desc: "Nous concevons et déployons des réseaux LAN/WAN performants, adaptés à la taille et aux besoins de votre entreprise. De l'audit initial à la mise en production, notre équipe assure une configuration optimale de vos équipements réseau (switches, routeurs, pare-feu) pour garantir stabilité et performance.",
    features: ["Audit réseau complet", "Configuration switches & routeurs", "Mise en place de VLANs", "Optimisation des performances"],
  },
  {
    icon: Cable,
    title: "Câblage & Infrastructure",
    desc: "Installation professionnelle de câblage structuré cuivre (Cat5e, Cat6, Cat6a) et fibre optique. Nous réalisons le câblage de vos locaux dans le respect des normes en vigueur, avec certification de chaque lien pour garantir une connectivité fiable et pérenne.",
    features: ["Câblage cuivre & fibre optique", "Baies de brassage", "Certification & recette", "Plans de câblage"],
  },
  {
    icon: ShieldCheck,
    title: "Sécurité Électronique",
    desc: "Protégez vos locaux avec nos solutions de sécurité électronique complètes : vidéosurveillance IP, contrôle d'accès, systèmes d'alarme intrusion et détection incendie. Nous assurons l'installation, la configuration et la maintenance de vos équipements de sécurité.",
    features: ["Vidéosurveillance IP/HD", "Contrôle d'accès biométrique", "Alarme intrusion", "Détection incendie"],
  },
  {
    icon: Wrench,
    title: "Maintenance Informatique & Support",
    desc: "Bénéficiez d'un support technique réactif et d'une maintenance préventive de votre parc informatique. Nos techniciens interviennent sur site ou à distance pour résoudre vos problèmes rapidement et minimiser les temps d'arrêt.",
    features: ["Support sur site & à distance", "Maintenance préventive", "Gestion de parc informatique", "Contrats de maintenance"],
  },
  {
    icon: Wifi,
    title: "Télécommunications & Réseaux Sans Fil",
    desc: "Déploiement de solutions Wi-Fi professionnelles haute densité et systèmes de télécommunication (IPBX, VoIP). Nous optimisons la couverture sans fil de vos locaux et assurons une qualité de service optimale pour vos communications.",
    features: ["Wi-Fi entreprise haute densité", "Téléphonie IP / VoIP", "Couverture radio optimisée", "Solutions de visioconférence"],
  },
];

const ServicesPage = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionTitle
          title="Nos Services"
          subtitle="Des solutions complètes pour répondre à tous vos besoins en infrastructure réseau, sécurité et informatique."
        />
        <div className="space-y-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card rounded-lg border border-border shadow-card p-6 md:p-8 hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <s.icon className="text-primary-foreground" size={28} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                    <DotNetworkIcon className="w-6 h-6" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
