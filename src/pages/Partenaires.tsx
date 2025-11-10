import axaLogo from '@/assets/axa.svg';
import wheelizLogo from '@/assets/wheeliz.svg';
import handiMobileLogo from '@/assets/handi-mobile.svg';
import handiConduiteLogo from '@/assets/handi-conduite.svg';
import garagesLogo from '@/assets/garages-locaux.svg';
import { SectionHeader } from '@/components/SectionHeader';
import { PartnerLogo } from '@/components/PartnerLogo';

const partners = [
  { name: 'AXA', logo: axaLogo },
  { name: 'Wheeliz', logo: wheelizLogo },
  { name: 'Handi Mobile', logo: handiMobileLogo },
  { name: 'Handi Conduite', logo: handiConduiteLogo },
  { name: 'Garagistes Locaux', logo: garagesLogo }
];

export const Partenaires = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
      <SectionHeader
        eyebrow="Alliances"
        title="Des partenaires engagés pour la mobilité inclusive"
        description="Nous connectons grands assureurs, spécialistes du handicap et réseaux de garages de proximité."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <PartnerLogo key={partner.name} {...partner} />
        ))}
      </div>
    </div>
  );
};

export default Partenaires;
