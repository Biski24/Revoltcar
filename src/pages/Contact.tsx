import { FormEvent, useState, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
};

type Field = keyof FormState;

type InputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const Contact = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: Field) => (event: InputEvent) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormState(initialState);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-6 py-16">
      <SectionHeader
        eyebrow="Contact"
        title="Discutons de la mobilité de vos assurés"
        description="Parlez-nous de vos besoins. Nous vous recontactons sous 24 heures avec un plan d’activation sur mesure."
        align="center"
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Prénom
              <input
                required
                value={formState.firstName}
                onChange={handleChange('firstName')}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Alex"
                name="firstName"
                autoComplete="given-name"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Nom
              <input
                required
                value={formState.lastName}
                onChange={handleChange('lastName')}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Martin"
                name="lastName"
                autoComplete="family-name"
              />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Email professionnel
              <input
                required
                type="email"
                value={formState.email}
                onChange={handleChange('email')}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="prenom.nom@entreprise.fr"
                name="email"
                autoComplete="email"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Téléphone
              <input
                required
                type="tel"
                value={formState.phone}
                onChange={handleChange('phone')}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="04 84 00 00 00"
                name="phone"
                autoComplete="tel"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Message
            <textarea
              required
              value={formState.message}
              onChange={handleChange('message')}
              className="min-h-[140px] rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Décrivez vos attentes, volume de sinistres, zones géographiques..."
              name="message"
            />
          </label>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-accent"
          >
            Envoyer ma demande
          </motion.button>
          {submitted ? (
            <motion.p
              role="status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl bg-primary/10 px-4 py-3 text-sm text-primary"
            >
              Merci ! Votre message a bien été envoyé. Notre équipe revient vers vous très vite.
            </motion.p>
          ) : null}
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-6 rounded-3xl bg-primary/5 p-8 text-slate-700"
        >
          <h3 className="text-2xl font-semibold text-slate-900">Pourquoi prendre contact ?</h3>
          <ul className="space-y-4 text-sm leading-relaxed">
            <li>
              • Déployer un programme de mobilité de remplacement premium et durable pour vos assurés.
            </li>
            <li>• Intégrer votre réseau de garages partenaires dans notre plateforme digitale.</li>
            <li>• Accéder à nos indicateurs ESG et à un reporting transparent.</li>
            <li>• Offrir une expérience fluide et rassurante aux conducteurs après sinistre.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
