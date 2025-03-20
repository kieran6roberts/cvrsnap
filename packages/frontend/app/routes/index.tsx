import type { MetaFunction } from 'react-router';
import { Container } from '@mantine/core';

import { Footer } from '~/shared/layouts/Footer';
import { SITE_NAME } from '~/config/consts';
import { GridBackground } from '~/shared/components/GridBackground';
import { FeatureList } from '~/features/landing/components/FeatureList';
import { CoverExampleList } from '~/features/landing/components/CoverExampleList';
import { SectionContainer } from '~/features/landing/components/SectionContainer';
import { SectionHeader } from '~/features/landing/components/SectionHeader';
import { Hero } from '~/features/landing/components/Hero';
import { EditorCTA } from '~/features/landing/components/EditorCTA';
import { TargetCustomerList } from '~/features/landing/components/TargetCustomerList';

export const meta: MetaFunction = () => {
  const title = `${SITE_NAME} - Effortless Blog Cover Creation`;
  const description = `A great blog post needs a great cover. ${SITE_NAME} helps you create stunning blog cover images in seconds with easy-to-use templates and editing tools. It's completely free to download as many cover images as you like.`;

  return [{ title, description }];
};

export default function Index() {
  return (
    <>
      <Container component="main" size="xl" pos="relative">
        <GridBackground />
        <Hero />
        <CoverExampleList />
        <SectionContainer>
          <SectionHeader
            title="Who is CvrSnap for?"
            copy="CvrSnap is designed primarily for users who don't want to spend hours designing custom cover images using design tools. Here are some categories of people who may find CvrSnap useful."
          />
          <TargetCustomerList />
        </SectionContainer>
        <SectionContainer>
          <SectionHeader
            title="Features"
            copy="CvrSnap is a blog cover creation tool that helps you create stunning blog cover images in seconds with easy-to-use templates and editing tools. Here are some of the features that make it so great."
          />
          <FeatureList />
        </SectionContainer>
        <SectionContainer>
          <SectionHeader title="Ready to build free blog covers?" isCenter />
          <EditorCTA />
        </SectionContainer>
      </Container>
      <Footer />
    </>
  );
}
