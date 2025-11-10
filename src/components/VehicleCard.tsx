import { motion } from 'framer-motion';

interface VehicleCardProps {
  title: string;
  description: string;
  image: string;
}

export const VehicleCard = ({ title, description, image }: VehicleCardProps) => {
  return (
    <motion.article
      whileHover={{ translateY: -6 }}
      className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-primary/10"
    >
      <div className="relative h-48 w-full overflow-hidden bg-primary/5">
        <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
        <p className="mt-auto text-xs text-slate-400">Photo non contractuelle</p>
      </div>
    </motion.article>
  );
};
