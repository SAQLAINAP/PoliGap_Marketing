import type { Metadata } from 'next';
import { DemoForm } from '@/components';

export const metadata: Metadata = {
  title: 'Book a Demo | PoliGap',
  description: 'Request a personalized PoliGap demo tailored to your organization.',
};

export default function Page() {
  return <DemoForm />;
}
