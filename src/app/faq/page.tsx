import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | PoliGap',
  description: 'Frequently asked questions about PoliGap.',
};

export default function Page() {
  return (
    <section style={{ padding: '4rem 0 6rem' }}>
      <div style={{ width: '90%', maxWidth: 900, margin: '0 auto', color: 'var(--white)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>FAQ</h1>
        <ul style={{ color: 'var(--link-color)', lineHeight: 1.8 }}>
          <li>
            <strong style={{ color: 'var(--white)' }}>What is PoliGap?</strong><br />
            AI-powered compliance and contract analysis to speed up reviews and reduce risk.
          </li>
          <li>
            <strong style={{ color: 'var(--white)' }}>Do you support multiple standards?</strong><br />
            Yes—add checks for the standards you need and monitor results in dashboards.
          </li>
          <li>
            <strong style={{ color: 'var(--white)' }}>How do I get started?</strong><br />
            Visit the <a href="/pricing" style={{ color: 'var(--white)' }}>pricing</a> page or <a href="/demo" style={{ color: 'var(--white)' }}>book a demo</a>.
          </li>
        </ul>
      </div>
    </section>
  );
}
