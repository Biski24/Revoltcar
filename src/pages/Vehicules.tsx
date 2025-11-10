import { VehicleCard } from '@/components/VehicleCard';
import { SectionHeader } from '@/components/SectionHeader';

const vehicles = [
  {
    title: 'Renault Zoé 100% électrique',
    description: 'Citadine idéale pour les trajets urbains, 300 km d’autonomie réelle et recharge rapide compatible.',
    image: '/renault-zoe.jpeg'
  },
  {
    title: 'Renault Clio Hybrid',
    description: 'Polyvalence et faible consommation pour les déplacements quotidiens, boîte automatique e-Tech.',
    image: '/renault-clio.jpg'
  },
  {
    title: 'Renault Koleos Initiale Paris',
    description: 'SUV premium confortable pour les longues distances, intérieur cuir et aides à la conduite avancées.',
    image: '/renault-koleos.webp'
  },
  {
    title: 'Véhicule PMR adapté',
    description: 'Plateforme télescopique, ancrages sécurisés, accompagnement dédié pour conducteurs et passagers PMR.',
    image: '/vehicule-pmr.jpg'
  }
];

export const Vehicules = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
      <SectionHeader
        eyebrow="Catalogue"
        title="Des véhicules premium pour chaque profil d’assuré"
        description="Notre flotte est mise à jour en continu pour garantir disponibilité, sécurité et faible impact environnemental."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.title} {...vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Vehicules;
