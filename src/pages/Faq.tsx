import { AccordionItem } from '@/components/AccordionItem';
import { SectionHeader } from '@/components/SectionHeader';

const faqs = [
  {
    question: 'Comment Revoltcar sélectionne-t-il les véhicules de remplacement ?',
    answer:
      'Nous opérons une flotte multi-énergies issue de partenaires certifiés. Chaque véhicule est contrôlé avant remise, désinfecté et livré avec les documents assurance nécessaires.'
  },
  {
    question: 'Combien de temps faut-il pour obtenir un véhicule ?',
    answer:
      'Selon la zone géographique, un véhicule standard est livré en moins de 6 heures. Pour les véhicules spécifiques (PMR, SUV), nous proposons un créneau adapté sous 24 heures.'
  },
  {
    question: 'Proposez-vous un suivi digital pour les assurés ?',
    answer:
      'Oui, notre plateforme suit chaque étape : confirmation de l’assureur, mise à disposition, livraison, restitution. Les assurés reçoivent des notifications SMS et e-mail.'
  },
  {
    question: 'Comment rejoindre le réseau de garages partenaires ?',
    answer:
      'Il suffit de nous contacter via le formulaire. Nous validons ensuite les critères qualité, ESG et service client avant intégration au programme Revoltcar.'
  }
];

export const Faq = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-6 py-16">
      <SectionHeader
        eyebrow="FAQ"
        title="Tout savoir sur l’expérience Revoltcar"
        description="Des réponses claires pour les assureurs, garages et conducteurs."
        align="center"
      />
      <div className="space-y-4">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
