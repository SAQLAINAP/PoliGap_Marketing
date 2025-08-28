'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Wrapper,
  Container,
  Hero,
  Eyebrow,
  Title,
  Lead,
  PillRow,
  Pill,
  Divider,
  Section,
  SubTitle,
  Body,
  List,
  ListItem,
  StatGrid,
  StatCard,
} from './styles';

export default function Page() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      // Hero elements
      gsap.from('[data-hero] > *', {
        opacity: 0,
        y: 14,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
      });

      // Capability list items
      gsap.from('[data-capabilities] li', {
        opacity: 0,
        y: 12,
        duration: 0.45,
        ease: 'power2.out',
        stagger: 0.06,
        delay: 0.1,
      });

      // Stat cards
      gsap.from('[data-stats] > div', {
        opacity: 0,
        y: 12,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.08,
        delay: 0.15,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <Wrapper>
      <Container ref={rootRef}>
        <Hero data-hero>
          <Eyebrow>About</Eyebrow>
          <Title>About PoliGap</Title>
          <Lead>
            PoliGap is a pioneering force in AI-driven enterprise solutions, developing advanced compliance and contract analysis platforms that empower organizations to navigate regulatory and contractual landscapes with precision and speed. Our platform integrates cutting-edge artificial intelligence, including natural language processing and machine learning, to deliver a suite of tools designed for legal, compliance, and business teams. With a focus on scalability and innovation, PoliGap serves industries ranging from finance to healthcare, supporting over 75–100 logos within 12–18 months and targeting $1M–$2M in annual recurring revenue (ARR) through partnerships with 5–8 design collaborators. Our technology reduces manual effort by up to 50%, enhances accuracy with 95% specificity in clause detection, and provides real-time insights across global regulatory frameworks.
          </Lead>
          <PillRow>
            <Pill>95% clause specificity</Pill>
            <Pill>40% faster reviews</Pill>
            <Pill>200+ risk categories</Pill>
          </PillRow>
        </Hero>

        <Divider />

        <Section>
          <SubTitle>Our Vision</SubTitle>
          <Body>
            Our vision at PoliGap is to transform the way organizations manage regulatory compliance and contract lifecycles by making complex legal and contractual frameworks intuitive, actionable, and accessible to all. We aim to eliminate the burden of manual reviews and compliance gaps, enabling teams to focus on strategic growth with confidence. By leveraging AI to interpret over 200 risk categories, adapt to evolving standards like GDPR, ISO 27001, and SOC 2, and deliver tailored recommendations, we strive to set a new benchmark for efficiency, achieving a 40% faster review cycle and ensuring 80% recommendation accuracy through continuous learning and validation KPIs.
          </Body>
        </Section>

        <Section data-capabilities>
          <SubTitle>Our Comprehensive Platform Capabilities</SubTitle>
          <List>
            <ListItem>
              <strong>Automated Compliance Verification:</strong> Conducts real-time checks against global standards (e.g., GDPR, HIPAA, SEC) with automated gap identification and remediation suggestions, reducing compliance risks by 25% more than manual methods.
            </ListItem>
            <ListItem>
              <strong>Advanced Contract Analysis:</strong> Performs fast, detailed reviews of contracts (e.g., NDAs, vendor agreements, M&A documents) with 95% specificity in clause extraction, providing structured insights, risk scoring, and benchmark comparisons against industry norms.
            </ListItem>
            <ListItem>
              <strong>Intelligent Task Management:</strong> Assigns owners, sets due dates, and tracks progress with plain-English recommendations, improving task closure rates by 30% through customizable workflows.
            </ListItem>
            <ListItem>
              <strong>Risk Monitoring Dashboards:</strong> Delivers interactive visualizations of portfolio-wide risks, compliance status, and progress metrics, enabling proactive decision-making with exportable PDF/CSV evidence for audits.
            </ListItem>
            <ListItem>
              <strong>Evidence Export Agent:</strong> Generates comprehensive, audit-ready reports with detailed clause annotations and compliance validations, ensuring transparency and defensibility.
            </ListItem>
            <ListItem>
              <strong>Scalable Integration:</strong> Seamlessly connects with document management systems (e.g., SharePoint, Google Drive) and legal databases (e.g., Westlaw), supporting enterprise-grade scalability for 100+ users with zero integration fees.
            </ListItem>
          </List>
        </Section>

        <Section data-stats>
          <SubTitle>Impact at a glance</SubTitle>
          <StatGrid>
            <StatCard>
              <h4>75–100 logos</h4>
              <p>Projected within 12–18 months.</p>
            </StatCard>
            <StatCard>
              <h4>$1M–$2M ARR</h4>
              <p>Target via 5–8 design partners.</p>
            </StatCard>
            <StatCard>
              <h4>50% less manual effort</h4>
              <p>Automation across compliance and contracts.</p>
            </StatCard>
          </StatGrid>
        </Section>
      </Container>
    </Wrapper>
  );
}
