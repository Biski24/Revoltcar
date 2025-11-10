import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';
import { Link } from 'react-router-dom';

const benefits = [
  {
    title: 'Activation express',
    description: 'Coordination instantanée entre assureur, garage et conducteur pour limiter l’immobilisation.'
  },
  {
    title: 'Véhicules adaptés',
    description: 'Citadines électriques, hybrides familiales, SUV premium, flotte PMR disponible en quelques heures.'
  },
  {
    title: 'Suivi transparent',
    description: 'Chaque étape est tracée dans notre plateforme : notifications automatiques et support dédié 7j/7.'
  }
];

const testimonials = [
  {
    quote: 'Revoltcar a permis à nos assurés de repartir sur la route en moins d’une demi-journée, avec un taux de satisfaction record.',
    author: 'Sophie, Responsable partenariats chez AXA'
  },
  {
    quote: 'L’interface est fluide, les équipes sont réactives. Nous avons gagné un temps précieux sur nos remplacements véhicules.',
    author: 'Julien, Directeur réseau de garages partenaires'
  }
];

export const Home = () => {
  return (
    <div className="space-y-24">
      <Hero />

      <section className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Pourquoi Revoltcar?"
          title="Une plateforme conçue pour les sinistres modernes"
          description="Nous orchestrons l’ensemble des parties prenantes pour garantir une expérience fluide, rassurante et durable."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Impact"
            title="Aligné avec les objectifs ESG des assureurs"
            description="Réduction des émissions CO₂, accompagnement des publics fragiles, valorisation des garages locaux."
            align="center"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { label: 'Véhicules électrifiés', value: '82%' },
              { label: 'Livraison < 6h', value: '94%' },
              { label: 'Taux de satisfaction', value: '4.9/5' }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-white bg-white p-8 text-center shadow-lg shadow-primary/5"
              >
                <p className="text-4xl font-semibold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Ils témoignent"
          title="Des partenaires rassurés, des conducteurs satisfaits"
          description="Nous créons une expérience premium à chaque sinistre."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4 }}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-lg text-slate-700">“{testimonial.quote}”</p>
              <cite className="mt-6 block text-sm font-semibold text-slate-900">{testimonial.author}</cite>
            </motion.blockquote>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-primary/90 to-accent px-8 py-10 text-white">
          <div>
            <h3 className="text-2xl font-semibold">Prêt à offrir une expérience sinistre premium ?</h3>
            <p className="text-sm text-white/80">Nous connectons vos assurés aux véhicules adaptés en un clin d’œil.</p>
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Discuter avec nous
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
