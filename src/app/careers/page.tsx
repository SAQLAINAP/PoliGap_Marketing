import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | PoliGap',
  description: 'Join PoliGap to build AI-powered compliance and contract analysis tools.',
};

export default function Page() {
  return (
    <section style={{ padding: '4rem 0 6rem' }}>
      <div style={{ width: '90%', maxWidth: 900, margin: '0 auto', color: 'var(--white)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Careers</h1>
        <p style={{ color: 'var(--link-color)' }}>
          We are a small, fast-moving team shaping the future of policy and contract analysis. We value curiosity, craft, and shipping.
        </p>
        <h2 style={{ fontSize: '1.1rem', marginTop: '1rem' }}>Open roles</h2>
        <p style={{ color: 'var(--link-color)' }}>
          No open roles right now. Email us at careers@poligap.ai with your portfolio if you think you’re a fit.
        </p>
      </div>
    </section>
  );
}
