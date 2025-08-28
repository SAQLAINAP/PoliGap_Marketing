'use client';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.section`
  padding: 6rem 0 8rem;
  background: transparent;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  color: var(--white);
`;

export const Hero = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 2.25rem;
  animation: ${fadeUp} 500ms ease forwards;
`;

export const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--link-color);
  background: rgba(255,255,255,0.06);
  padding: 0.4rem 0.6rem;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 999px;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 2.5vw, 2.5rem);
  line-height: 1.15;
  font-weight: 800;
  margin: 0;
`;

export const Lead = styled.p`
  color: var(--link-color);
  font-size: 1.05rem;
  line-height: 1.8;
`;

export const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const Pill = styled.span`
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--white);
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0));
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.85rem;
`;

export const Divider = styled.hr`
  margin: 2.5rem 0;
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
`;

export const Section = styled.section`
  display: grid;
  gap: 0.75rem;
  margin-bottom: 2rem;
  animation: ${fadeUp} 600ms ease forwards;
`;

export const SubTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  margin: 0.25rem 0 0;
`;

export const Body = styled.p`
  color: var(--link-color);
  line-height: 1.85;
`;

export const List = styled.ul`
  color: var(--link-color);
  line-height: 1.9;
  padding-left: 1.1rem;
  margin: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 1.2rem;
  margin: 0.35rem 0;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    top: 0;
    color: var(--white);
  }
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 0.25rem;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StatCard = styled.div`
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 0.9rem 0.9rem;

  h4 {
    margin: 0 0 0.25rem 0;
    font-size: 1.1rem;
  }
  p {
    margin: 0;
    color: var(--link-color);
    font-size: 0.9rem;
  }
`;
 
