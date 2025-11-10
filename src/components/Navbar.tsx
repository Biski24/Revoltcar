import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/vehicules', label: 'Nos véhicules' },
  { path: '/partenaires', label: 'Partenaires' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' }
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-accent">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">
            R
          </span>
          Revoltcar
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-primary ${
                  isActive ? 'text-primary' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-primary px-4 py-2 text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-accent"
          >
            Nous contacter
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary transition hover:bg-primary/20 md:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden"
          >
            <div className="space-y-2 border-t border-slate-200 px-6 py-4 text-sm font-medium text-slate-600">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl border border-transparent px-4 py-3 transition hover:border-primary/30 hover:bg-primary/5 ${
                      isActive ? 'text-primary' : ''
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-4 py-3 text-center font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-accent"
              >
                Nous contacter
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
