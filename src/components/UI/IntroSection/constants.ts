import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = [
  "PoliGap's Next-Gen",
  'Contract Reviewer',
];
export const desktopParagraphPhrase = [
  " Discover PoliGap's latest innovation – our AI-powered Contract Reviewer.",
  ' Elevate your contract review experience with cutting-edge clause analysis,',
  'customization, and actionable insights.',
];

// For mobile
export const mobileHeaderPhrase = [
  "PoliGap's Next-Gen",
  'Contract Reviewer',
];
export const mobileParagraphPhrase = [
  " Discover PoliGap's AI-powered Contract Reviewer.",
  ' Elevate your contract review experience with cutting-edge',
  'clause analysis, customization, and',
  'actionable insights.',
];

export const edges = [
  {
    point: 'Automated Clause Review',
    details:
      'Our platform features automated clause review, enabling swift, secure contract analysis with a simple upload, tailored to your standards.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Contract Customization',
    details:
      'Customize your contracts to fit your needs. Select standard or custom templates with citations and tailored clause suggestions.',
    icon: ic_identification,
  },
  {
    point: 'Review-Ready Reports',
    details:
      'Your contract security is our priority. Our platform delivers PDF/CSV review reports to ensure clarity and protect your agreements.',
    icon: ic_lock_closed,
  },
];
