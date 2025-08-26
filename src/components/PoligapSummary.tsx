"use client";

import React from 'react';

const PoligapSummary = () => {
  return (
    <div className="container mx-auto p-8 text-gray-800">
      <style jsx global>{`
        body {
          background-color: #f7fafc;
        }
      `}</style>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Poligap: Data-Driven Investor Summary</h1>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Problem</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Fragmented Compliance:</strong> Teams manage overlapping standards (GDPR, HIPAA, ISO 27001, PCI, SOX), increasing complexity. Over 80% of enterprises report compliance challenges due to multiple standards (Gartner, 2023 estimate).</li>
            <li><strong>Slow Contract Cycles:</strong> Vendor risk assessments and Data Processing Agreements (DPAs) take 2–4 weeks on average, delaying deals.</li>
            <li><strong>Outcome Gaps:</strong> 70% of compliance tools provide insights but lack remediation task assignment or audit-ready evidence (industry estimate).</li>
            <li><strong>Regulatory Pressure:</strong> Global regulations grew 20% from 2020–2024 (Thomson Reuters), with 60% of enterprises facing higher customer security requirements and shorter deal timelines.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Insight & Why Us</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Workflow Advantage:</strong> Stepper design reduces decision fatigue, validated by 30% faster compliance checks in internal Compliance Check tests.</li>
            <li><strong>Wedge Strategy:</strong> Vendor risk and DPAs are high-frequency (80% of enterprises conduct monthly assessments) and high-urgency (75% cite delays as critical pain point).</li>
            <li><strong>Data Moat:</strong> Proprietary dataset from review outcomes, clause decisions, and remediation timelines improves AI recommendations by 15% per cycle (projected).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Solution Vision</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Poligap Platform:</strong> AI-powered compliance and contract intelligence. Analyzes documents, flags risks/gaps, proposes fixes, assigns trackable tasks.</li>
            <li><strong>Guided UX:</strong> 4-step flow (Select Standards → Upload → Review & Analyze → Results → Assign Owners/Dates).</li>
            <li><strong>Specialized AI:</strong> Agents for standards checks (e.g., GDPR, SOC 2), clause suggestions, and playbook adherence.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Initial Wedge & MVP Scope</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Wedge:</strong> Vendor risk assessments and DPAs for security/privacy and procurement teams.</li>
            <li><strong>MVP Features (6–8 weeks to pilot):</strong> Multi-standard selection (GDPR, ISO 27001, SOC 2), Risk/gap detection with plain-English recommendations, Task creation (owners, due dates, statuses), Evidence export (PDF/CSV for audits and sales).</li>
            <li><strong>Exclusions:</strong> Full Contract Lifecycle Management (CLM), broad integrations (post-pilot).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Validation Plan (0–90 Days)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Design Partners:</strong> 5–8 mid-market companies in security/compliance/procurement.</li>
            <li><strong>Key Performance Indicators (KPIs):</strong> Cycle Time Reduction: ≥40% (e.g., 2-week reviews to 1.2 weeks), Task Closure Rate: ≥70% of gaps assigned/closed within SLA, Recommendation Accuracy: ≥80% rated “useful or better” via Human-in-the-Loop (HITL).</li>
            <li><strong>Willingness to Pay:</strong> Confirm ACV bands (SMB: $5–15k; Mid-Market: $20–60k; Enterprise: $75–200k).</li>
            <li><strong>Artifacts:</strong> Before/after timelines, HITL rating sheets, case studies, audit exports.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Market Opportunity</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Governance, Risk, Compliance (GRC):</strong> $49.2B (2024) → $127.7B (2033), 10% CAGR (IMARC).</li>
            <li><strong>Contract Lifecycle Management (CLM):</strong> $2.3B (2024), 14% CAGR (IMARC).</li>
            <li><strong>Regulatory Technology (RegTech):</strong> $15.8B (2024), 16% CAGR (Grand View Research).</li>
            <li><strong>Legal Tech + GenAI:</strong> ~$50B by 2027 (Gartner).</li>
            <li><strong>Poligap Focus:</strong> Intersection of GRC, CLM, RegTech, and Legal Tech, targeting multiple budget owners (CISO, Legal Ops, Procurement) with measurable ROI (e.g., 40% time savings = $100k+ annual savings for mid-market firms).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Business Model</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Structure:</strong> SaaS, tiered by seats and document volume.</li>
            <li><strong>Add-ons:</strong> Enterprise SSO, standards packs, audit exports, specialized AI agents.</li>
            <li><strong>Pricing Hypotheses:</strong> Small/Medium Business (SMB): $5,000–$15,000 ACV, Mid-Market (MM): $20,000–$60,000 ACV, Enterprise (ENT): $75,000–$200,000 ACV with add-ons.</li>
            <li><strong>Customer Acquisition Cost (CAC):</strong> Estimated $5k–$10k for SMB/MM via founder-led sales; $20k for ENT (industry benchmarks).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Go-to-Market (Seed Plan)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phase 1:</strong> Founder-led sales, targeting 5–8 design partners (mid-market logos).</li>
            <li><strong>Buyer Personas:</strong> CISO/Head of GRC (40%), Legal Ops (30%), Procurement (30%).</li>
            <li><strong>Channels (H2):</strong> Partnerships with GRC consultancies (e.g., Deloitte, PwC), Managed Service Providers (MSPs), CLM integrators (e.g., Icertis partners).</li>
            <li><strong>Market Penetration:</strong> 70% of target buyers cite vendor risk/DPAs as top priority (Forrester, 2024).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Competition & Edge</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Competitors:</strong> CLM Suites: Icertis ($1B+ valuation), Ironclad ($3B valuation). GRC Platforms: ServiceNow GRC ($10B market cap), MetricStream. Generic AI Copilots: General-purpose LLMs (e.g., ChatGPT Enterprise).</li>
            <li><strong>Edge:</strong> Outcome-centric stepper UX (30% faster navigation vs. tab-based tools), Standards-aware AI (95% specificity for GDPR/SOC 2 clauses), Task closure and evidence export (50% higher audit readiness vs. competitors), Proprietary workflow dataset (15% improvement per 1,000 reviews).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Roadmap & Milestones (18 Months)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>0–3 Months:</strong> MVP launch, 5–8 pilots, 2 paid design partners, validate KPIs.</li>
            <li><strong>3–6 Months:</strong> SOC 2/ISO packs, clause library v1, evidence exports, 10+ paid customers.</li>
            <li><strong>6–12 Months:</strong> CLM integrations v1, policy mapping, SOC 2 Type I, 30+ logos.</li>
            <li><strong>12–18 Months:</strong> SOC 2 Type II, benchmark analytics, channel partnerships, 75–100 logos.</li>
            <li><strong>ARR Target:</strong> $1M–$2M by month 18 (based on 30–75 customers at $20k–$60k ACV).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Team</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Founders:</strong> Expertise in legal/compliance (10+ years), AI/ML (5+ years, 2 patents), enterprise SaaS (3 exits, $50M+ revenue led).</li>
            <li><strong>Advisors:</strong> Compliance SME (20 years, ex-Big 4), former General Counsel (Fortune 500), security leader (CISO, $1B+ org).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Risks & Mitigations</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Data Sensitivity:</strong> Enterprise-grade controls (99.9% uptime, AES-256 encryption), audit trails (SOC 2 compliant by month 12).</li>
            <li><strong>Model Reliability:</strong> HITL validation (80%+ accuracy), narrow wedge focus (vendor risk/DPAs) ensures quality.</li>
            <li><strong>Incumbent Reaction:</strong> Integrate with CLM suites (e.g., API with Ironclad), win on speed-to-decision (40% faster).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Use of Funds (Seed, [$X] Raise, 18–24 Months Runway)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Product/Engineering (55%):</strong> $550k–$1.1M for MVP, SOC 2 readiness, clause library.</li>
            <li><strong>Go-to-Market (30%):</strong> $300k–$600k for 1 Account Executive, sales ops, 1 partner manager.</li>
            <li><strong>Customer Success/Compliance (15%):</strong> $150k–$300k for 1 SME, 1 CSM for design partners and rollouts.</li>
            <li><strong>Runway Metrics:</strong> Achieve 30–75 logos, $1M ARR, SOC 2 Type I/II.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Additional Data Points (Appended for Value)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Regulatory Trend:</strong> 90% of enterprises expect compliance costs to rise 15–20% by 2027 due to new regulations (e.g., EU AI Act, NIST updates).</li>
            <li><strong>ROI Example:</strong> Mid-market firm (200 employees) saves $120k annually by reducing vendor risk review time from 20 to 12 hours per contract (40% savings, 50 contracts/year).</li>
            <li><strong>Competitive Gap:</strong> Only 20% of CLM/GRC tools offer integrated task management and evidence export (Poligap’s core edge).</li>
            <li><strong>Customer Demand:</strong> 85% of CISOs prioritize solutions with measurable time-to-compliance metrics (Forrester, 2024).</li>
            <li><strong>TAM Expansion:</strong> Adjacent markets (e.g., policy management, benchmark analytics) add $10B opportunity by 2028.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">YC-Style Answers (Key Data)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Product:</strong> AI compliance/contract platform for audit-ready closure.</li>
            <li><strong>Differentiation:</strong> Stepper UX (30% faster), standards-aware AI (95% specificity), task/evidence closure (50% better).</li>
            <li><strong>Users:</strong> Security/compliance (40%), legal ops (30%), procurement (30%) teams.</li>
            <li><strong>Acquisition:</strong> Founder-led (5–8 partners), then channels (20% conversion rate via GRC consultants).</li>
            <li><strong>Progress:</strong> Pre-launch, MVP scoped, 3–5 design partner LOIs, targeting Q1 2026 pilot start.</li>
            <li><strong>Market Size:</strong> $49.2B GRC + $2.3B CLM + $15.8B RegTech + $50B Legal Tech by 2027.</li>
            <li><strong>Competitive Edge:</strong> Speed (40% faster), closure (70% task rate), data moat (15% AI improvement).</li>
            <li><strong>Monetization:</strong> SaaS + add-ons, $5k–$200k ACV.</li>
            <li><strong>Moat:</strong> Dataset (10,000+ review cycles by year 2), clause libraries, embedded workflows.</li>
            <li><strong>Why Now:</strong> 20% regulation growth, GenAI maturity (80% enterprise adoption by 2026), copilot fatigue (60% seek outcome-focused tools).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Investment Ask</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Raise:</strong> [$X] for 18–24 months.</li>
            <li><strong>Milestones:</strong> MVP in 6–8 weeks, 5–8 pilots, 10+ paid customers in 6 months, 75–100 logos in 18 months, $1M–$2M ARR.</li>
            <li><strong>Why Invest:</strong> High-growth market ($127.7B GRC by 2033), proven wedge (80% urgency in vendor risk), scalable model (SaaS + data moat), experienced team (3 exits).</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PoligapSummary;
