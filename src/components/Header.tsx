import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Moon, Sun, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/a-propos", label: t("nav.about") },
  ];

  const Toggles = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        onClick={toggleTheme}
        aria-label={theme === "dark" ? t("theme.light") : t("theme.dark")}
        title={theme === "dark" ? t("theme.light") : t("theme.dark")}
        className="p-2 rounded-md text-muted-foreground hover:text-secondary transition-colors"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <button
        onClick={toggleLang}
        aria-label="Language"
        className="flex items-center gap-1 px-2 py-2 rounded-md text-muted-foreground hover:text-secondary transition-colors text-xs font-semibold uppercase"
      >
        <Languages size={18} />
        {lang === "fr" ? "FR" : "EN"}
      </button>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" role="banner">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img alt="OptiNet" className="h-10 w-10 md:h-12 md:w-12" src="/lovable-uploads/f92c4c5a-5933-4230-bcf7-5a614d52a516.png" />
          <span className="text-xl font-bold text-foreground tracking-tight">OptiNet</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                location.pathname === link.to ? "text-secondary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Toggles />
          <Link to="/contact">
            <Button size="sm" className="bg-gradient-primary text-primary-foreground font-semibold">
              <Phone size={14} className="mr-1.5" />
              {t("nav.contact")}
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center md:hidden">
          <Toggles />
          <button onClick={() => setOpen(!open)} className="text-foreground p-2" aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open &&
      <nav className="md:hidden bg-background border-b border-border animate-fade-in" role="navigation">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) =>
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium py-2 transition-colors hover:text-secondary ${
                location.pathname === link.to ? "text-secondary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
            )}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button size="sm" className="bg-gradient-primary text-primary-foreground font-semibold w-full mt-2">
                <Phone size={14} className="mr-1.5" />
                {t("nav.contact")}
              </Button>
            </Link>
          </div>
        </nav>
      }
    </header>);

};

export default Header;
