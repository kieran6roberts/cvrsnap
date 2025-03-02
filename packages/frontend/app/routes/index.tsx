import type { MetaFunction } from 'react-router';
import { Container, Title, Text, Flex, Stack, Button, Badge } from '@mantine/core';
import { Link } from 'react-router';
import { ArrowUpRight, MapsArrowDiagonal, CheckCircle } from 'iconoir-react';

import { ThemeToggle } from '~/shared/components/ThemeToggle';
import { Footer } from '~/shared/layouts/Footer';
import { GitHubStarButton } from '~/shared/components/GitHubStarButton';
import { SITE_NAME, SITE_CASE_STUDY_URL } from '~/config/consts';
import classes from '~/shared/styles/index.module.css';
import LandingExample1 from '~/images/landing-example-1.webp';
import LandingExample2 from '~/images/landing-example-2.webp';
import LandingExample3 from '~/images/landing-example-3.webp';
import LandingExample4 from '~/images/landing-example-4.webp';
import { GridBackground } from '~/shared/components/GridBackground';

export const meta: MetaFunction = () => {
  const title = `${SITE_NAME} - Effortless Blog Cover Design Tool`;
  const description = `A great blog post needs a great cover. ${SITE_NAME} helps you create stunning blog cover images in seconds with easy-to-use templates and editing tools. It's completely free to download as many cover images as you like.`;

  return [{ title, description }];
};

const CvrSnapScreenshot = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <article className={classes['landing-examples--container']}>
      <img src={src} alt={alt} width={300} height={178} className={classes['landing-examples--image']} />
    </article>
  );
};

export default function Index() {
  return (
    <>
      <Container component="main" className={classes['themed-bg']} size="xl">
        <section className={classes['landing-section']}>
          <GridBackground />
          <Flex className={classes['hero-section']} direction={{ base: 'column', lg: 'row' }} gap="xl">
            <Stack gap="lg" className={classes['hero-section-content']}>
              <div className={classes['hero-section-content--theme-container']}>
                <ThemeToggle size="lg" />
              </div>
              <Link
                to={SITE_CASE_STUDY_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Read about CvrSnap and how it was built"
              >
                <Badge
                  className={classes['hero-section-content--badge']}
                  variant="filled"
                  rightSection={<ArrowUpRight width={12} height={12} />}
                >
                  Read about CvrSnap
                </Badge>
              </Link>
              <Title
                order={1}
                aria-label={`${SITE_NAME} - Effortless Blog Cover Design`}
                className={classes['hero-section-content--title']}
              >
                Effortless Blog Cover Design with {SITE_NAME}
              </Title>

              <Text className={classes['hero-section-content--copy']} fz={{ base: 'md', sm: 'lg' }}>
                A great blog post needs a great cover. CvrSnap helps you create stunning blog cover images in seconds
                with easy-to-use templates and editing tools.
              </Text>
              <Flex direction={{ base: 'column', xs: 'row' }} gap="md">
                <Button
                  fullWidth
                  darkHidden
                  component={Link}
                  to="/create"
                  size="md"
                  variant="primary"
                  rightSection={<MapsArrowDiagonal width={16} height={16} />}
                  viewTransition
                >
                  Build for free
                </Button>
                <Button
                  fullWidth
                  lightHidden
                  component={Link}
                  to="/create"
                  size="md"
                  variant="white"
                  rightSection={<MapsArrowDiagonal width={16} height={16} />}
                  viewTransition
                >
                  Build for free
                </Button>
                <GitHubStarButton fullWidth size="md" variant="outline" copy="GitHub" />
              </Flex>
              <Flex align="center" justify="center" gap="xs">
                <CheckCircle width={24} height={24} opacity={0.9} />
                <p className={classes['hero-section-content--message']}>Save unlimited images for free.</p>
              </Flex>
            </Stack>
          </Flex>
          <section className={classes['landing-examples']}>
            <CvrSnapScreenshot src={LandingExample1} alt="Example 1 - CvrSnap cover image" />
            <CvrSnapScreenshot src={LandingExample2} alt="Example 2 - CvrSnap cover image" />
            <CvrSnapScreenshot src={LandingExample3} alt="Example 3 - CvrSnap cover image" />
            <CvrSnapScreenshot src={LandingExample4} alt="Example 4 - CvrSnap cover image" />
          </section>
        </section>
      </Container>
      <Footer />
    </>
  );
}
