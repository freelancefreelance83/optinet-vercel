import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import DotNetworkIcon from "@/components/DotNetworkIcon";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceCabling from "@/assets/service-cabling.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceTelecom from "@/assets/service-telecom.jpg";

const services = [
  {
    image: serviceNetwork,
    title: "Installation & Configuration Réseau",
    desc: "Nous concevons et déployons des réseaux LAN/WAN performants, adaptés à la taille et aux besoins de votre entreprise. De l'audit initial à la mise en production, notre équipe assure une configuration optimale de vos équipements réseau (switches, routeurs, pare-feu) pour garantir stabilité et performance.",
    features: ["Audit réseau complet", "Configuration switches & routeurs", "Mise en place de VLANs", "Optimisation des performances"],
  },
  {
    image: serviceCabling,
    title: "Câblage & Infrastructure",
    desc: "Installation professionnelle de câblage structuré cuivre (Cat5e, Cat6, Cat6a) et fibre optique. Nous réalisons le câblage de vos locaux dans le respect des normes en vigueur, avec certification de chaque lien pour garantir une connectivité fiable et pérenne.",
    features: ["Câblage cuivre & fibre optique", "Baies de brassage", "Certification & recette", "Plans de câblage"],
  },
  {
    image: serviceSecurity,
    title: "Sécurité Électronique",
    desc: "Protégez vos locaux avec nos solutions de sécurité électronique complètes : vidéosurveillance IP, contrôle d'accès, systèmes d'alarme intrusion et détection incendie. Nous assurons l'installation, la configuration et la maintenance de vos équipements de sécurité.",
    features: ["Vidéosurveillance IP/HD", "Contrôle d'accès biométrique", "Alarme intrusion", "Détection incendie"],
  },
  {
    image: serviceMaintenance,
    title: "Maintenance Informatique & Support",
    desc: "Bénéficiez d'un support technique réactif et d'une maintenance préventive de votre parc informatique. Nos techniciens interviennent sur site ou à distance pour résoudre vos problèmes rapidement et minimiser les temps d'arrêt.",
    features: ["Support sur site & à distance", "Maintenance préventive", "Gestion de parc informatique", "Contrats de maintenance"],
  },
  {
    image: serviceTelecom,
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
        <div className="space-y-12">
          {services.map((s, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl border border-border shadow-card overflow-hidden hover:shadow-elevated transition-shadow duration-300`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className={`p-8 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{s.title}</h3>
                    <DotNetworkIcon className="w-6 h-6 flex-shrink-0" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
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

        {/* Airtable placeholder */}
        <div className="mt-16 bg-muted rounded-lg p-8 text-center">
          <p className="text-muted-foreground text-sm">
            📋 Cette section est prête à être connectée à Airtable pour un affichage dynamique des services.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
