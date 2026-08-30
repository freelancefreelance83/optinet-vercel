import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "fr" | "en";

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.blog": "Blog",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "theme.light": "Mode jour",
    "theme.dark": "Mode nuit",

    "footer.tagline":
      "Votre partenaire de confiance en solutions réseau, sécurité électronique et infrastructure IT à Dakar, Sénégal.",
    "footer.nav": "Navigation",
    "footer.contact": "Contact",
    "footer.follow": "Suivez-nous",
    "footer.rights": "Tous droits réservés.",

    "home.tagline": "Connecter. Sécuriser. Optimiser.",
    "home.cta.services": "Découvrez nos services",
    "home.cta.contact": "Nous contacter",
    "home.stats.projects": "Projets réalisés",
    "home.stats.satisfied": "Clients satisfaits",
    "home.stats.support": "Support technique",
    "home.stats.years": "Années d'expérience",
    "home.services.title": "Nos Services",
    "home.services.subtitle": "Des solutions complètes pour votre infrastructure réseau et informatique.",
    "home.services.all": "Voir tous nos services",
    "home.why.title": "Pourquoi choisir OptiNet ?",
    "home.why.subtitle": "Un partenaire fiable pour toutes vos solutions technologiques.",
    "home.why.1.title": "Expertise certifiée",
    "home.why.1.desc": "Nos ingénieurs sont formés et certifiés sur les technologies de pointe du marché.",
    "home.why.2.title": "Réactivité 24/7",
    "home.why.2.desc": "Une équipe disponible en permanence pour assurer la continuité de vos opérations.",
    "home.why.3.title": "Solutions sur mesure",
    "home.why.3.desc": "Chaque projet est unique. Nous adaptons nos solutions à vos besoins spécifiques.",
    "home.why.4.title": "Tarifs compétitifs",
    "home.why.4.desc": "Des solutions professionnelles accessibles, adaptées à tous les budgets.",
    "home.why.5.title": "Accompagnement complet",
    "home.why.5.desc": "De l'audit initial à la maintenance, nous vous accompagnons à chaque étape.",
    "home.why.6.title": "Technologies modernes",
    "home.why.6.desc": "Nous utilisons les dernières technologies pour garantir performance et sécurité.",
    "home.audit.title": "Contactez-nous pour un audit gratuit",
    "home.audit.desc": "Notre équipe d'experts analyse votre infrastructure et vous propose des solutions sur mesure.",
    "home.audit.cta": "Contactez-nous",
    "svc.network.title": "Installation & Configuration Réseau",
    "svc.network.desc": "Conception et déploiement de réseaux performants adaptés à vos besoins professionnels.",
    "svc.cabling.title": "Câblage & Infrastructure",
    "svc.cabling.desc": "Installation de câblage structuré cuivre et fibre optique pour une connectivité fiable.",
    "svc.security.title": "Sécurité Électronique",
    "svc.security.desc": "Systèmes de vidéosurveillance, contrôle d'accès et alarmes pour protéger vos locaux.",
    "svc.maintenance.title": "Maintenance Informatique & Support",
    "svc.maintenance.desc": "Support technique réactif et maintenance préventive pour assurer la continuité de vos opérations.",
    "svc.telecom.title": "Télécommunications & Réseaux Sans Fil",
    "svc.telecom.desc": "Solutions Wi-Fi professionnelles et systèmes de télécommunication sur mesure.",

    "services.hero.subtitle":
      "Des solutions complètes pour répondre à tous vos besoins en infrastructure réseau, sécurité et informatique.",
    "services.cta.title": "Besoin d'un service personnalisé ?",
    "services.cta.desc": "Contactez notre équipe pour un devis gratuit adapté à vos besoins.",
    "services.cta.button": "Demander un devis",

    "blog.hero.title": "Nos Actualités",
    "blog.hero.subtitle": "Restez informé des dernières tendances en matière de réseau, sécurité et technologies.",
    "blog.read": "Lire l'article",

    "about.hero.title": "Qui sommes-nous",
    "about.hero.subtitle": "OptiNet, votre partenaire de confiance en solutions réseau et informatique.",
    "about.history.title": "Notre histoire",
    "about.history.p1":
      "Fondée par des passionnés de technologie, OptiNet accompagne les entreprises dans la conception, le déploiement et la maintenance de leurs infrastructures réseau et informatiques.",
    "about.history.p2":
      "Notre équipe d'experts certifiés met son savoir-faire au service de votre performance, en proposant des solutions adaptées à chaque besoin et à chaque budget. De la PME au grand compte, nous nous engageons à fournir un service d'excellence et un accompagnement personnalisé.",
    "about.dna.title": "Notre ADN",
    "about.dna.subtitle": "Les principes qui guident chacune de nos interventions.",
    "about.mission.title": "Mission",
    "about.mission.text":
      "Fournir des solutions réseau et informatiques innovantes, fiables et sur mesure pour accompagner la croissance de nos clients.",
    "about.vision.title": "Vision",
    "about.vision.text":
      "Devenir le partenaire technologique de référence pour les entreprises qui souhaitent une infrastructure performante et sécurisée.",
    "about.values.title": "Valeurs",
    "about.values.text":
      "Excellence technique, réactivité, transparence et engagement envers la satisfaction client guident chacune de nos interventions.",

    "contact.hero.title": "Contactez-nous",
    "contact.hero.subtitle": "Nous sommes à votre écoute. Remplissez le formulaire et nous vous répondrons rapidement.",
    "contact.name": "Nom *",
    "contact.name.ph": "Votre nom",
    "contact.email": "Email *",
    "contact.phone": "Téléphone",
    "contact.message": "Message *",
    "contact.message.ph": "Décrivez votre besoin...",
    "contact.send": "Envoyer",
    "contact.sending": "Envoi en cours...",
    "contact.details": "Nos coordonnées",
    "contact.audit.title": "Audit gratuit",
    "contact.audit.desc":
      "Contactez-nous pour bénéficier d'un audit gratuit de votre infrastructure réseau. Nos experts analyseront vos besoins et vous proposeront des solutions adaptées.",
    "contact.error": "Erreur",
    "contact.error.required": "Veuillez remplir tous les champs obligatoires.",
    "contact.error.generic": "Une erreur est survenue. Veuillez réessayer.",
    "contact.success": "Message envoyé !",
    "contact.success.desc": "Nous vous répondrons dans les plus brefs délais.",
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.contact": "Contact",
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",

    "footer.tagline":
      "Your trusted partner for networking, electronic security and IT infrastructure solutions in Dakar, Senegal.",
    "footer.nav": "Navigation",
    "footer.contact": "Contact",
    "footer.follow": "Follow us",
    "footer.rights": "All rights reserved.",

    "home.tagline": "Connect. Secure. Optimize.",
    "home.cta.services": "Discover our services",
    "home.cta.contact": "Get in touch",
    "home.stats.projects": "Completed projects",
    "home.stats.satisfied": "Satisfied clients",
    "home.stats.support": "Technical support",
    "home.stats.years": "Years of experience",
    "home.services.title": "Our Services",
    "home.services.subtitle": "Complete solutions for your network and IT infrastructure.",
    "home.services.all": "See all our services",
    "home.why.title": "Why choose OptiNet?",
    "home.why.subtitle": "A reliable partner for all your technology solutions.",
    "home.why.1.title": "Certified expertise",
    "home.why.1.desc": "Our engineers are trained and certified on today's leading technologies.",
    "home.why.2.title": "24/7 responsiveness",
    "home.why.2.desc": "A team available around the clock to keep your operations running.",
    "home.why.3.title": "Tailor-made solutions",
    "home.why.3.desc": "Every project is unique. We adapt our solutions to your specific needs.",
    "home.why.4.title": "Competitive pricing",
    "home.why.4.desc": "Accessible professional solutions that fit every budget.",
    "home.why.5.title": "End-to-end support",
    "home.why.5.desc": "From the initial audit to maintenance, we support you at every step.",
    "home.why.6.title": "Modern technologies",
    "home.why.6.desc": "We use the latest technologies to guarantee performance and security.",
    "home.audit.title": "Contact us for a free audit",
    "home.audit.desc": "Our team of experts analyses your infrastructure and proposes tailor-made solutions.",
    "home.audit.cta": "Contact us",
    "svc.network.title": "Network Installation & Configuration",
    "svc.network.desc": "Design and deployment of high-performance networks tailored to your business needs.",
    "svc.cabling.title": "Cabling & Infrastructure",
    "svc.cabling.desc": "Structured copper and fiber optic cabling for reliable connectivity.",
    "svc.security.title": "Electronic Security",
    "svc.security.desc": "CCTV, access control and alarm systems to protect your premises.",
    "svc.maintenance.title": "IT Maintenance & Support",
    "svc.maintenance.desc": "Responsive technical support and preventive maintenance to ensure business continuity.",
    "svc.telecom.title": "Telecom & Wireless Networks",
    "svc.telecom.desc": "Professional Wi-Fi solutions and custom telecommunication systems.",

    "services.hero.subtitle":
      "Complete solutions to meet all your network, security and IT infrastructure needs.",
    "services.cta.title": "Need a custom service?",
    "services.cta.desc": "Contact our team for a free quote tailored to your needs.",
    "services.cta.button": "Request a quote",

    "blog.hero.title": "Our News",
    "blog.hero.subtitle": "Stay informed about the latest trends in networking, security and technology.",
    "blog.read": "Read the article",

    "about.hero.title": "Who we are",
    "about.hero.subtitle": "OptiNet, your trusted partner for network and IT solutions.",
    "about.history.title": "Our story",
    "about.history.p1":
      "Founded by technology enthusiasts, OptiNet supports companies in designing, deploying and maintaining their network and IT infrastructure.",
    "about.history.p2":
      "Our team of certified experts puts its know-how at the service of your performance, offering solutions adapted to every need and budget. From SMEs to large accounts, we are committed to delivering excellent service and personalised support.",
    "about.dna.title": "Our DNA",
    "about.dna.subtitle": "The principles that guide every one of our projects.",
    "about.mission.title": "Mission",
    "about.mission.text":
      "Deliver innovative, reliable and tailor-made network and IT solutions to support our clients' growth.",
    "about.vision.title": "Vision",
    "about.vision.text":
      "Become the reference technology partner for companies seeking a high-performance and secure infrastructure.",
    "about.values.title": "Values",
    "about.values.text":
      "Technical excellence, responsiveness, transparency and commitment to client satisfaction guide everything we do.",

    "contact.hero.title": "Contact us",
    "contact.hero.subtitle": "We are here to help. Fill in the form and we will get back to you quickly.",
    "contact.name": "Name *",
    "contact.name.ph": "Your name",
    "contact.email": "Email *",
    "contact.phone": "Phone",
    "contact.message": "Message *",
    "contact.message.ph": "Describe your need...",
    "contact.send": "Send",
    "contact.sending": "Sending...",
    "contact.details": "Our details",
    "contact.audit.title": "Free audit",
    "contact.audit.desc":
      "Contact us to benefit from a free audit of your network infrastructure. Our experts will analyse your needs and propose suitable solutions.",
    "contact.error": "Error",
    "contact.error.required": "Please fill in all required fields.",
    "contact.error.generic": "Something went wrong. Please try again.",
    "contact.success": "Message sent!",
    "contact.success.desc": "We will get back to you as soon as possible.",
  },
} as const;

type Key = keyof (typeof translations)["fr"];

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: Key) => string;
}>({ lang: "fr", setLang: () => {}, toggleLang: () => {}, t: (k) => k });

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "fr";
    return (localStorage.getItem("optinet-lang") as Lang) || "fr";
  });

  useEffect(() => {
    localStorage.setItem("optinet-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: Key) => translations[lang][key] ?? translations.fr[key] ?? key;

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang: () => setLang((l) => (l === "fr" ? "en" : "fr")), t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
