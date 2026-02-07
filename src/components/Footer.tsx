import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Music2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <motion.div whileHover={{ scale: 1.02 }} className="text-2xl font-semibold text-white">
            Revoltcar
          </motion.div>
          <p className="text-sm text-slate-400">
            Réinventons la mobilité de remplacement : plus rapide, plus simple, plus humaine.
          </p>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-primary" />
            74 chemin des amandiers, 13220 Châteauneuf-les-Martigues
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Navigation</p>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="transition hover:text-primary">
              Accueil
            </Link>
            <Link to="/vehicules" className="transition hover:text-primary">
              Nos véhicules
            </Link>
            <Link to="/partenaires" className="transition hover:text-primary">
              Partenaires
            </Link>
            <Link to="/faq" className="transition hover:text-primary">
              FAQ
            </Link>
            <Link to="/contact" className="transition hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Contact</p>
          <div className="flex items-center gap-3 text-slate-300">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:contact@revoltcar.fr" className="transition hover:text-primary">
              contact@revoltcar.fr
            </a>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+33484000000" className="transition hover:text-primary">
              04 84 00 00 00
            </a>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <Instagram className="h-4 w-4 text-primary" />
            <a
              href="https://www.instagram.com/revoltcar13"
              className="transition hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              @revoltcar13
            </a>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <Music2 className="h-4 w-4 text-primary" />
            <a
              href="https://www.tiktok.com/@revoltcar13"
              className="transition hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              @revoltcar13
            </a>
          </div>
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} Revoltcar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
