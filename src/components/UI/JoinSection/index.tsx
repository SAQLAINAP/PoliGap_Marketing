'use client';
import { useState } from 'react';
import {
  Wrapper,
  Inner,
  Header,
  TestimonialWrapper,
  Testimonial,
  Testimony,
  UserInfo,
  Name,
} from './styles';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { Props, desktopHeaderPhrase, testimonials } from './constants';
import Link from 'next/link';

const JoinSection = () => {
  const [testimonialsArr] = useState<Props[]>(testimonials);

  const isMobile = useIsMobile();

  const mappedTestimonials = isMobile
    ? testimonialsArr.slice(0, 1)
    : testimonialsArr.slice(0, 3);
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        </Header>
        <TestimonialWrapper>
          {mappedTestimonials.map((t, i) => (
            <Link key={i} href={t.redirect || '#'} style={{ textDecoration: 'none' }}>
              <Testimonial>
                <Testimony>{t.testimony}</Testimony>
                <UserInfo>
                  <Name>
                    <MaskText phrases={new Array(t.person)} tag="h3" />
                    <MaskText phrases={new Array('Learn More')} tag="p" />
                  </Name>
                </UserInfo>
              </Testimonial>
            </Link>
          ))}
        </TestimonialWrapper>
      </Inner>
    </Wrapper>
  );
};

export default JoinSection;
