import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mx-auto max-w-3xl space-y-3 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="text-base text-slate-600">{description}</p> : null}
    </motion.div>
  );
};
