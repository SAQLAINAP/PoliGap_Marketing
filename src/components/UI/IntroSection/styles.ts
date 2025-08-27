'use client';
import Image from 'next/image';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 7.5rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 7.38rem;

  h3 {
    color: var(--emerald);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const HeaderMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 7.77rem;
  width: 100%;
  height: 300px;

  @media (max-width: 768px) {
    height: 200px;
    margin-bottom: 5rem;
  }
`;

export const LeftImage = styled(Image)`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  object-fit: cover;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
  z-index: 1;

  &.active {
    transform: translateX(-200%) translateY(-50%);
    left: 50%;
    top: 50%;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;

    &.active {
      transform: translateX(-150%) translateY(-50%);
    }
  }
`;

export const MiddleImage = styled(Image)`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 3;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: translateX(-50%) translateY(-50%);
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const RightImage = styled(Image)`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  object-fit: cover;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
  z-index: 2;

  &.active {
    transform: translateX(100%) translateY(-50%);
    left: 50%;
    top: 50%;
    z-index: 2;
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;

    &.active {
      transform: translateX(50%) translateY(-50%);
    }
  }
`;
