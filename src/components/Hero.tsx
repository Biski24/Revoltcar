import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Mobilité durable premium
          </span>
          <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
            Entre l’assurance et le garage,{' '}
            <span className="text-primary">Revoltcar</span> vous remet en route.
          </h1>
          <p className="max-w-xl text-lg text-slate-600">
            En quelques clics, nous coordonnons assureurs et garages pour retrouver un véhicule adapté à chaque
            situation, partout en France.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/vehicules"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-accent"
            >
              Voir nos véhicules
            </Link>
            <Link
              to="/partenaires"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              Nos partenaires
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-3xl border border-white/60 bg-white/60 p-8 shadow-xl shadow-primary/10 backdrop-blur">
              <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-500">Satisfaction clients</p>
                <p className="text-2xl font-semibold text-primary">
                  4.9/5 <span aria-hidden="true">★</span>
                </p>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ delay: 0.4, duration: 1 }}
                />
              </div>
              <div className="rounded-2xl bg-primary/10 p-4 text-sm text-slate-600">
                Véhicule standard livré en moins de <span className="font-semibold text-primary">4h</span>.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform items-center gap-2 text-sm text-slate-500 md:flex"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200">
          ↓
        </span>
        Faites défiler pour découvrir Revoltcar
      </motion.div>
    </section>
  );
};
