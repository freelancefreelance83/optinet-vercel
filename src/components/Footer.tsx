import { Link } from "react-router-dom";
import logo from "@/assets/on-monogram.png";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="OptiNet" className="h-10 w-10 brightness-0 invert" />
            <span className="text-xl font-bold tracking-tight">OptiNet</span>
          </div>
          <p className="text-sm opacity-70 max-w-xs">
            Connecter. Sécuriser. Optimiser. Votre partenaire de confiance en solutions réseau et informatique.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Navigation</h4>
          <nav className="flex flex-col gap-2">
            {[
              { to: "/", label: "Accueil" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Blog" },
              { to: "/temoignages", label: "Témoignages" },
              { to: "/a-propos", label: "À propos" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Suivez-nous</h4>
          <div className="flex gap-4">
            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} OptiNet. Tous droits réservés. | Mentions légales
      </div>
    </div>
  </footer>
);

export default Footer;
