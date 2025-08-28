'use client';

import { useState } from 'react';
import { Wrapper, Inner, Header, Toggle, Cards, Card, Price, Features, CTA, TableWrapper, Table, ThPlan, TdPlan, Check, Cross, ContactSection, CTAButtons, ContactButton, PrimaryButton } from './styles';

type Tier = {
  name: string;
  monthly: number;
  yearly: number;
  features: string[];
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    features: ['Basic compliance checks', 'Community support', 'Limited exports'],
  },
  {
    name: 'Pro',
    monthly: 29,
    yearly: 290,
    features: ['Advanced analysis', 'Priority support', 'Unlimited projects'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    monthly: 99,
    yearly: 990,
    features: ['Custom workflows', 'SSO & Audit logs', 'Dedicated success manager'],
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  // Ordered feature list: in tier order, add features on first appearance
  const allFeatures: string[] = [];
  const seen = new Set<string>();
  tiers.forEach((t) => {
    t.features.forEach((f) => {
      if (!seen.has(f)) {
        seen.add(f);
        allFeatures.push(f);
      }
    });
  });

  // Cumulative feature sets per tier (each tier inherits predecessors)
  const cumulativeFeaturesByTier: Record<string, Set<string>> = {};
  const cumulative = new Set<string>();
  tiers.forEach((t) => {
    t.features.forEach((f) => cumulative.add(f));
    cumulativeFeaturesByTier[t.name] = new Set(cumulative);
  });

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h1>Pricing</h1>
          <p>Choose a plan that scales with your compliance needs. Switch between monthly and yearly billing anytime.</p>
          <Toggle>
            <button
              className={billing === 'monthly' ? 'active' : ''}
              onClick={() => setBilling('monthly')}
              aria-pressed={billing === 'monthly'}
            >
              Monthly
            </button>
            <button
              className={billing === 'yearly' ? 'active' : ''}
              onClick={() => setBilling('yearly')}
              aria-pressed={billing === 'yearly'}
            >
              Yearly
            </button>
          </Toggle>
        </Header>

        <Cards>
          {tiers.map((tier, idx) => (
            <Card key={tier.name} className={tier.highlight ? 'highlight' : ''}>
              <h3>{tier.name}</h3>
              <Price>
                <span className="amount">{billing === 'monthly' ? `$${tier.monthly}` : `$${tier.yearly}`}</span>
                <span className="period">{billing === 'monthly' ? '/mo' : '/yr'}</span>
              </Price>
              <Features>
                {idx === 0 ? (
                  <li>Includes:</li>
                ) : (
                  <li>
                    Everything in <strong>{tiers[idx - 1].name}</strong> +
                  </li>
                )}
                {tier.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </Features>
              <CTA>
                {tier.name === 'Starter' && (
                  <PrimaryButton href="/">Start for free</PrimaryButton>
                )}
                {tier.name === 'Pro' && (
                  <PrimaryButton href="/">Try Pro — 14‑day trial</PrimaryButton>
                )}
                {tier.name === 'Enterprise' && (
                  <PrimaryButton className="ghost" href="/demo">Book a demo</PrimaryButton>
                )}
              </CTA>
            </Card>
          ))}
        </Cards>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Feature</th>
                {tiers.map((t) => (
                  <ThPlan key={t.name}>{t.name}</ThPlan>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature) => (
                <tr key={feature}>
                  <td>{feature}</td>
                  {tiers.map((t) => (
                    <TdPlan key={t.name + feature}>
                      {cumulativeFeaturesByTier[t.name].has(feature) ? (
                        <Check>✓</Check>
                      ) : (
                        <Cross>✕</Cross>
                      )}
                    </TdPlan>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>

        <ContactSection>
          <div>
            <h3>Need a tailored plan?</h3>
            <p>Tell us about your compliance workflow and usage—our team will craft a custom plan that fits your requirements.</p>
          </div>
          <CTAButtons>
            <ContactButton href="mailto:sales@poligap.ai?subject=PoliGap%20Pricing%20Inquiry">Contact Sales</ContactButton>
            <ContactButton className="ghost" href="/demo">Book a demo</ContactButton>
          </CTAButtons>
        </ContactSection>
      </Inner>
    </Wrapper>
  );
};

export default Pricing;
