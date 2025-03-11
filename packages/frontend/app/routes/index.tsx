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

export const meta: MetaFunction = () => {
  const title = `${SITE_NAME} - Effortless Blog Cover Design Tool`;
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
            title="Features"
            copy="CvrSnap is a blog cover design tool that helps you create stunning blog cover images in seconds with easy-to-use templates and editing tools. Here are some of the features that make it so great."
          />
          <FeatureList />
        </SectionContainer>
        <SectionContainer>
          <EditorCTA />
        </SectionContainer>
      </Container>
      <Footer />
    </>
  );
}
