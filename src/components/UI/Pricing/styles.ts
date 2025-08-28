'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 4rem 0 6rem;
  border-bottom: 0.5px solid #3d3d3d;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  text-align: center;

  h1 {
    color: var(--white);
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    color: var(--link-color);
    max-width: 760px;
  }
`;

export const Toggle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #0d0d0d;
  border: 1px solid #2a2a2a;
  border-radius: 999px;
  padding: 0.25rem;

  button {
    border: none;
    background: transparent;
    color: var(--link-color);
    padding: 0.5rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    font-weight: 500;
  }

  button.active {
    background: var(--emerald);
    color: var(--Background);
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #0d0d0d;
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &.highlight {
    border-color: var(--emerald);
    box-shadow: 0 0 0 1px var(--emerald) inset;
  }

  h3 {
    color: var(--white);
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;

  .amount {
    color: var(--white);
    font-size: 2rem;
    font-weight: 700;
  }

  .period {
    color: var(--link-color);
    font-size: 0.95rem;
  }
`;

export const Features = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 0 0.25rem;

  li {
    color: var(--link-color);
    list-style: none;
  }
`;

export const CTA = styled.div`
  margin-top: auto;
`;

export const TableWrapper = styled.div`
  margin-top: 2.5rem;
  background: #0d0d0d;
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead th {
    background: #121212;
    color: var(--white);
    text-align: left;
    font-weight: 600;
    padding: 0.9rem 1rem;
    border-bottom: 1px solid #2a2a2a;
  }

  tbody td {
    padding: 0.85rem 1rem;
    border-top: 1px solid #1a1a1a;
    color: var(--link-color);
  }

  tbody tr:nth-child(even) td {
    background: #0f0f0f;
  }
`;

export const ThPlan = styled.th`
  text-align: center !important;
`;

export const TdPlan = styled.td`
  text-align: center;
`;

export const Check = styled.span`
  color: var(--emerald);
  font-weight: 700;
`;

export const Cross = styled.span`
  color: #b04040;
  font-weight: 700;
`;

export const ContactSection = styled.section`
  margin-top: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  background: #0d0d0d;
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  padding: 1.25rem 1.5rem;

  h3 {
    color: var(--white);
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    color: var(--link-color);
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0.9rem;
  border-radius: 10px;
  border: 1px solid var(--emerald);
  color: var(--Background);
  background: var(--emerald);
  text-decoration: none;
  font-weight: 600;

  &.ghost {
    background: transparent;
    color: var(--white);
    border-color: #2a2a2a;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--emerald);
  color: var(--Background);
  background: var(--emerald);
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.2px;

  &.ghost {
    background: transparent;
    color: var(--white);
    border-color: #2a2a2a;
  }
`;
