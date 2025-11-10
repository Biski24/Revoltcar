import { motion } from 'framer-motion';

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export const PartnerLogo = ({ name, logo }: PartnerLogoProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      className="flex h-28 items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <img src={logo} alt={name} className="max-h-16 w-full object-contain" loading="lazy" />
    </motion.div>
  );
};
