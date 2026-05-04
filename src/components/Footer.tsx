import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground" role="contentinfo">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/f92c4c5a-5933-4230-bcf7-5a614d52a516.png" alt="OptiNet" className="h-10 w-10" />
            <span className="text-xl font-bold tracking-tight">OptiNet</span>
          </div>
          <p className="text-sm opacity-70 max-w-xs">
            Votre partenaire de confiance en solutions réseau, sécurité électronique et infrastructure IT à Dakar, Sénégal.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Navigation</h4>
          <nav className="flex flex-col gap-2">
            {[
              { to: "/", label: "Accueil" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Blog" },
              { to: "/a-propos", label: "À propos" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+221769457549" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
              <Phone size={14} /> +221 76 945 75 49
            </a>
            <a href="mailto:freelancefreelance83@gmail.com" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
              <Mail size={14} /> freelancefreelance83@gmail.com
            </a>
            <span className="flex items-center gap-2 text-sm opacity-70">
              <MapPin size={14} /> Maristes 2, Dakar, Sénégal
            </span>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Suivez-nous</h4>
          <div className="flex gap-4">
            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} OptiNet. Tous droits réservés. | Maristes 2, Dakar, Sénégal
      </div>
    </div>
  </footer>
);

export default Footer;
