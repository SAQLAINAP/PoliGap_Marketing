import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact us | PoliGap',
  description: 'Get in touch with the PoliGap team.',
};

export default function Page() {
  return (
    <section style={{ padding: '4rem 0 6rem' }}>
      <div style={{ width: '90%', maxWidth: 900, margin: '0 auto', color: 'var(--white)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Contact us</h1>
        <p style={{ color: 'var(--link-color)' }}>
          For sales and demos, book a <Link href="/demo" style={{ color: 'var(--white)' }}>personalized demo</Link>.
        </p>
        <p style={{ color: 'var(--link-color)', marginTop: '0.5rem' }}>
          General: hello@poligap.ai &nbsp;|&nbsp; Support: support@poligap.ai
        </p>
      </div>
    </section>
  );
}
