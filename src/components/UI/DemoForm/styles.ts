'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 4rem 0 6rem;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Header = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    color: var(--white);
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    color: var(--link-color);
  }
`;

export const Form = styled.form`
  background: #0d0d0d;
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    color: var(--white);
    font-size: 0.95rem;
  }

  input,
  select,
  textarea {
    background: #0b0b0b;
    color: var(--white);
    border: 1px solid #2a2a2a;
    border-radius: 10px;
    padding: 0.7rem 0.8rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: #7a7a7a;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: var(--emerald);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
  }

  textarea {
    min-height: 110px;
    grid-column: 1 / -1;
  }
`;

export const FullRow = styled.div`
  grid-column: 1 / -1;
`;

export const CheckGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  label {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--link-color);
    background: #0b0b0b;
    border: 1px solid #2a2a2a;
    border-radius: 999px;
    padding: 0.4rem 0.65rem;
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  input[type='checkbox'] {
    accent-color: var(--emerald);
  }
`;

export const Actions = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
`;

export const SubmitBtn = styled.button`
  background: var(--emerald);
  color: var(--Background);
  border: 1px solid var(--emerald);
  border-radius: 10px;
  padding: 0.7rem 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.05s ease, box-shadow 0.2s ease, opacity 0.2s ease;

  &:hover {
    box-shadow: 0 6px 22px rgba(16, 185, 129, 0.18);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Success = styled.div`
  grid-column: 1 / -1;
  background: #0f231e;
  border: 1px solid var(--emerald);
  color: var(--white);
  border-radius: 12px;
  padding: 0.9rem 1rem;
`;

export const SectionTitle = styled.h2`
  grid-column: 1 / -1;
  color: var(--white);
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0.25rem 0 0.25rem;
`;

export const Hint = styled.p`
  grid-column: 1 / -1;
  color: var(--link-color);
  font-size: 0.9rem;
  margin: -0.25rem 0 0.5rem;
`;

export const Divider = styled.hr`
  grid-column: 1 / -1;
  border: none;
  height: 1px;
  background: #1e1e1e;
  margin: 0.25rem 0 0.75rem;
`;
