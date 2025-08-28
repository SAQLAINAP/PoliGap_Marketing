import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PoliGap Terms of Service Agreement | PoliGap',
  description: 'Terms governing the use of PoliGap.',
};

export default function Page() {
  return (
    <section style={{ padding: '4rem 0 6rem' }}>
      <div style={{ width: '90%', maxWidth: 900, margin: '0 auto', color: 'var(--white)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>PoliGap Terms of Service Agreement</h1>
        <p style={{ color: 'var(--link-color)' }}>
          By accessing and using PoliGap, you agree to follow all applicable laws, use the platform responsibly, and respect the intellectual property of PoliGap and its partners. Our service is provided 'as is,' meaning we do not guarantee perfect performance or specific results, and no warranties are offered. For businesses or larger organizations, a detailed Master Service Agreement (MSA) may be necessary to outline additional terms and conditions.
        </p>

        <h2 style={{ fontSize: '1.1rem', marginTop: '1.25rem' }}>Acceptance of Terms</h2>
        <p style={{ color: 'var(--link-color)' }}>
          By creating an account or using the platform in any capacity, you accept these Terms as well as any policies referenced herein. If you do not agree, do not use PoliGap.
        </p>

        <h2 style={{ fontSize: '1.1rem', marginTop: '1rem' }}>Use of Service</h2>
        <ul style={{ color: 'var(--link-color)', lineHeight: 1.8 }}>
          <li>Do not upload unlawful, harmful, or confidential data you are not authorized to share.</li>
          <li>Do not interfere with platform integrity, security, or availability.</li>
          <li>Comply with applicable regulations including GDPR, HIPAA, or sector-specific rules.</li>
        </ul>

        <h2 style={{ fontSize: '1.1rem', marginTop: '1rem' }}>Intellectual Property</h2>
        <p style={{ color: 'var(--link-color)' }}>
          PoliGap, the underlying models, workflows, documentation, and all related assets are protected by copyright and other IP laws. No license is granted except where explicitly stated in a commercial agreement.
        </p>

        <h2 style={{ fontSize: '1.1rem', marginTop: '1rem' }}>Limitations and Liability</h2>
        <p style={{ color: 'var(--link-color)' }}>
          PoliGap is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim all warranties and shall not be liable for indirect, incidental, or consequential damages arising from your use of the service.
        </p>

        <h2 style={{ fontSize: '1.1rem', marginTop: '1rem' }}>Changes</h2>
        <p style={{ color: 'var(--link-color)' }}>
          We may update these Terms periodically. Material changes will be posted on this page with an updated effective date.
        </p>

        <hr style={{ border: 'none', height: 1, background: 'rgba(255,255,255,0.12)', margin: '2rem 0' }} />

        <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--link-color)' }}>
          We collect only what’s necessary to provide and improve PoliGap. Uploaded documents are processed securely and may be retained for processing or as configured by your workspace. We never sell personal data.
        </p>

        <h2 style={{ fontSize: '1.1rem', marginTop: '1rem' }}>Data We Collect</h2>
        <ul style={{ color: 'var(--link-color)', lineHeight: 1.8 }}>
          <li>Account information (name, email).</li>
          <li>Workspace settings and usage metrics for improving product performance.</li>
          <li>Uploaded documents and generated analysis strictly for the requested workflows.</li>
        </ul>

        <h2 style={{ fontSize: '1.1rem', marginTop: '1rem' }}>How We Use Data</h2>
        <ul style={{ color: 'var(--link-color)', lineHeight: 1.8 }}>
          <li>To operate core features: compliance checks, contract analysis, and exports.</li>
          <li>To enhance quality and reliability, including aggregated, de-identified analytics.</li>
          <li>To communicate service updates or critical notices.</li>
        </ul>

        <h2 style={{ fontSize: '1.1rem', marginTop: '1rem' }}>Retention and Security</h2>
        <p style={{ color: 'var(--link-color)' }}>
          Data retention follows your workspace configuration or applicable laws. We apply industry-standard security controls to protect data in transit and at rest.
        </p>

        <h2 style={{ fontSize: '1.1rem', marginTop: '1rem' }}>Your Rights</h2>
        <p style={{ color: 'var(--link-color)' }}>
          Depending on your jurisdiction, you may request access, correction, deletion, or portability of personal data. Contact us to exercise these rights.
        </p>

        {/* Unified CTA section */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <a href="mailto:legal@poligap.ai" style={{
            display: 'inline-block', padding: '0.7rem 1rem', borderRadius: 8,
            background: 'var(--white)', color: '#000', fontWeight: 600
          }}>Contact Legal</a>
          <a href="mailto:privacy@poligap.ai" style={{
            display: 'inline-block', padding: '0.7rem 1rem', borderRadius: 8,
            background: 'transparent', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.25)'
          }}>Privacy Requests</a>
        </div>
      </div>
    </section>
  );
}
