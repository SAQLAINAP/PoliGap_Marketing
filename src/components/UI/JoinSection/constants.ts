import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
  redirect?: string;
};

export const testimonials = [
  {
    testimony:
      'Discover our Contract Reviewer Agent, automating clause analysis with 95% specificity for GDPR and SOC 2 contracts. Click to learn more.',
    person: 'Contract Reviewer Agent',
    avatar: robert_fox,
    redirect: '/features/contract-reviewer',
  },
  {
    testimony:
      "Explore our Task Management Agent, assigning owners and due dates with plain-English recommendations. Click to learn more.",
    person: 'Task Management Agent',
    avatar: cameron_williamson,
    redirect: '/features/task-management',
  },
  {
    testimony:
      'Check out our Evidence Export Agent, generating PDF/CSV reports for audit readiness. Click to learn more.',
    person: 'Evidence Export Agent',
    avatar: esther_howard,
    redirect: '/features/evidence-export',
  },
  {
    testimony:
      'Explore our Task Management Agent, assigning owners and due dates with plain-English recommendations. Click to learn more.',
    person: 'Task Management Agent',
    avatar: cameron_williamson,
    redirect: '/features/task-management',
  },
  {
    testimony:
      'Discover our Contract Reviewer Agent, automating clause analysis with 95% specificity for GDPR and SOC 2 contracts. Click to learn more.',
    person: 'Contract Reviewer Agent',
    avatar: robert_fox,
    redirect: '/features/contract-reviewer',
  },
];

export const desktopHeaderPhrase = ['Explore PoliGap AI Features'];
