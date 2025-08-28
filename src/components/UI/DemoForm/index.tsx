'use client';

import { useState } from 'react';
import { Wrapper, Inner, Header, Form, Field, FullRow, CheckGroup, Actions, SubmitBtn, Success, SectionTitle, Hint, Divider } from './styles';

const industries = [
  'Technology',
  'Finance',
  'Healthcare',
  'Education',
  'Government',
  'Manufacturing',
  'Retail',
  'Other',
];

const employeeBands = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '501-1000',
  '1000+',
];

const plans = ['Starter', 'Pro', 'Enterprise'];

export default function DemoForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    // Basic validations
    const name = (fd.get('name') as string || '').trim();
    const email = (fd.get('email') as string || '').trim();

    if (!name || !email) {
      setSuccess(null);
      alert('Please fill in required fields: Name and Email.');
      return;
    }

    setSubmitting(true);
    try {
      // Placeholder; integrate API/CRM webhook here
      await new Promise((r) => setTimeout(r, 900));
      setSuccess('Thanks! Our team will reach out shortly to schedule your demo.');
      (e.target as HTMLFormElement).reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h1>Book a personalized demo</h1>
          <p>Tell us a few details and we\'ll tailor a walkthrough for your use case.</p>
        </Header>

        <Form onSubmit={handleSubmit}>
          <SectionTitle>Contact</SectionTitle>
          <Hint>We\'ll use this to coordinate the demo. Only your name and email are required.</Hint>

          <Field>
            <label htmlFor="name">Full name *</label>
            <input id="name" name="name" placeholder="Jane Doe" required />
          </Field>

          <Field>
            <label htmlFor="org">Organization</label>
            <input id="org" name="organization" placeholder="Acme Inc." />
          </Field>

          <Field>
            <label htmlFor="email">Work email *</label>
            <input id="email" name="email" type="email" placeholder="jane@company.com" required />
          </Field>

          <Field>
            <label htmlFor="role">Role/Title</label>
            <input id="role" name="role" placeholder="Compliance Lead" />
          </Field>

          <Field>
            <label htmlFor="phone">Phone (optional)</label>
            <input id="phone" name="phone" type="tel" placeholder="+1 555 0100" />
          </Field>

          <Field>
            <label htmlFor="country">Country (optional)</label>
            <input id="country" name="country" placeholder="United States" />
          </Field>

          <Divider />
          <SectionTitle>Company</SectionTitle>

          <Field>
            <label htmlFor="industry">Industry</label>
            <select id="industry" name="industry" defaultValue="">
              <option value="" disabled>
                Select industry
              </option>
              {industries.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </Field>

          <Field>
            <label htmlFor="employees">Employee count</label>
            <select id="employees" name="employees" defaultValue="">
              <option value="" disabled>
                Select range
              </option>
              {employeeBands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </Field>

          <Divider />
          <SectionTitle>Interests</SectionTitle>

          <FullRow>
            <label>Interested plan(s)</label>
            <CheckGroup>
              {plans.map((p) => (
                <label key={p}>
                  <input type="checkbox" name="plans" value={p} /> {p}
                </label>
              ))}
            </CheckGroup>
          </FullRow>

          <FullRow>
            <Field>
              <label htmlFor="goals">What would you like to achieve?</label>
              <textarea id="goals" name="goals" placeholder="Share integrations, policies, workflows, datasets, or success criteria" />
            </Field>
          </FullRow>

          <FullRow>
            <Field>
              <label htmlFor="timeframe">Timeline</label>
              <select id="timeframe" name="timeframe" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>ASAP</option>
                <option>1-3 months</option>
                <option>3-6 months</option>
                <option>6+ months</option>
              </select>
            </Field>
          </FullRow>

          <FullRow>
            <Field>
              <label htmlFor="preferredTime">Preferred demo time (optional)</label>
              <input id="preferredTime" name="preferredTime" type="text" placeholder="e.g., Tue/Thu 2–5 PM GMT" />
            </Field>
          </FullRow>

          <FullRow>
            <CheckGroup>
              <label>
                <input type="checkbox" name="consent" value="yes" /> I agree to be contacted about my request.
              </label>
              <span style={{ color: 'var(--link-color)' }}>
                Read our <a href="/privacy" style={{ color: 'var(--white)' }}>Privacy Policy</a>.
              </span>
            </CheckGroup>
          </FullRow>

          {success && <Success>{success}</Success>}

          <Actions>
            <SubmitBtn type="submit" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Request demo'}
            </SubmitBtn>
          </Actions>
        </Form>
      </Inner>
    </Wrapper>
  );
}
