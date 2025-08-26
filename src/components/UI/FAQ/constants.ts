type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = [
  'Frequently Asked Questions about',
  'PoliGap',
];
export const mobileHeaderPhrase = [
  'Frequently Asked',
  'Questions about',
  'PoliGap',
];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How do I get started with PoliGap?',
    answer:
      'To get started with PoliGap, visit our website and sign up for a free trial. You’ll need to provide your email and create a password. Once registered, you can upload your first contract for analysis within minutes.',
  },
  {
    question: 'How does PoliGap protect my contract data?',
    answer:
      'PoliGap uses advanced encryption to secure your contract data both in transit and at rest. We comply with GDPR and SOC 2 standards, and all uploads are processed through secure servers with strict access controls.',
  },
  {
    question: 'What types of contract reviews can I perform with PoliGap?',
    answer:
      'With PoliGap, you can perform reviews for various contract types, including vendor agreements, NDAs, and compliance documents like GDPR and ISO 27001, with automated clause analysis and gap identification.',
  },
  {
    question: 'What benefits does PoliGap offer for contract management?',
    answer:
      'PoliGap offers faster review cycles (up to 40% improvement), AI-driven task assignment with due dates, and exportable PDF/CSV reports for audits, enhancing efficiency and compliance readiness.',
  },
];
