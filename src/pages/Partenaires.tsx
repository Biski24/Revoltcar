<<<<<<< ours
=======
import axaLogo from '@/assets/axa.png';
import wheelizLogo from '@/assets/wheeliz.png';
import handiMobileLogo from '@/assets/handi-mobile.png';
import handiConduiteLogo from '@/assets/handi-conduite.png';
import garagesLogo from '@/assets/garages-locaux.png';
>>>>>>> theirs
import { SectionHeader } from '@/components/SectionHeader';
import { PartnerLogo } from '@/components/PartnerLogo';

const partners = [
<<<<<<< ours
  { name: 'AXA', logo: '/axa.png' },
  { name: 'Wheeliz', logo: '/wheeliz.png' },
  { name: 'Handi Mobile', logo: '/handi-mobile.png' },
  { name: 'Handi Conduite', logo: '/handi-conduite.png' },
  { name: 'Garagistes Locaux', logo: '/garages-locaux.jpg' }
=======
  { name: 'AXA', logo: axaLogo },
  { name: 'Wheeliz', logo: wheelizLogo },
  { name: 'Handi Mobile', logo: handiMobileLogo },
  { name: 'Handi Conduite', logo: handiConduiteLogo },
  { name: 'Garagistes Locaux', logo: garagesLogo }
>>>>>>> theirs
];

export const Partenaires = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
      <SectionHeader
<<<<<<< ours
        eyebrow="Partenaires"
=======
        eyebrow="Alliances"
>>>>>>> theirs
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
