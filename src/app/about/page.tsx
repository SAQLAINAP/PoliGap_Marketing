import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About PoliGap',
  description: 'About PoliGap’s product and approach.',
};

export default function Page() {
  return (
    <section style={{ padding: '4rem 0 6rem' }}>
      <div style={{ width: '90%', maxWidth: 900, margin: '0 auto', color: 'var(--white)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>About us</h1>
        <p style={{ color: 'var(--link-color)' }}>
          We combine deep domain expertise with modern AI to simplify compliance and contracts. The product emphasizes transparency and actionable insights.
        </p>
      </div>
    </section>
  );
}
