import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Privacy Policy | PoliGap',
  description: 'How PoliGap handles data and privacy.',
};

export default function Page() {
  redirect('/terms');
}
