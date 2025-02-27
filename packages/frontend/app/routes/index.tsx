import type { MetaFunction } from 'react-router';
import { Container, Title, Text, Flex, Stack, Button, Box, Image, Mark, List, ThemeIcon } from '@mantine/core';
import { Link } from 'react-router';
import { CheckCircleSolid } from 'iconoir-react';

import { Footer } from '~/shared/layouts/Footer';
import { GitHubStarButton } from '~/shared/components/GitHubStarButton';
import editorDark from '~/images/editor-dark.webp';
import { SITE_NAME } from '~/config/consts';
import { Navbar } from '~/shared/layouts/Navbar';
import classes from '~/shared/styles/index.module.css';
import { HeroBg } from '~/shared/svgs/HeroBg';

export const meta: MetaFunction = () => {
  const title = `${SITE_NAME} - Get your free blog post cover images.`;
  const description = `Most blog posts need a good cover image. ${SITE_NAME} empowers you to create great looking blog cover images in seconds using templates and simple editing tools. It's completely free to download as many cover images as you like.`;

  return [{ title, description }];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <Box className={classes['themed-bg']}>
        <Box component="div" pos="absolute" top={0} left={0} right={0} bottom={0} style={{ zIndex: 0 }} h="max-content">
          <HeroBg />
        </Box>
        <Container component="main" size="xl" style={{ zIndex: 10 }}>
          <Flex direction="column" gap="xl" align="center" pt={{ base: 80, sm: 100 }}>
            <Stack justify="center" gap="xs">
              <Title
                ta="center"
                order={1}
                fz={{ base: '2.2rem', sm: '3.8rem' }}
                style={{ lineHeight: '1', zIndex: 1 }}
                fw={700}
                aria-label={SITE_NAME}
                maw={{ base: 500, sm: 800 }}
                mx="auto"
              >
                Publish blog posts{' '}
                <Mark fz="0.95em" style={{ zIndex: -1 }} color="pink">
                  faster
                </Mark>{' '}
                and take away the cover image design burden
              </Title>

              <Text fz={{ base: 'sm', sm: 'lg' }} fw={500} ta="center" maw={{ base: 525, sm: 660 }} mx="auto" mt="md" style={{ zIndex: 1 }}>
                Most blog posts need a good cover image and {SITE_NAME} empowers you to create great looking blog cover
                images in seconds using templates and simple editing tools. It's completely free to download as many
                images as you like.
              </Text>
              <Flex direction={{ base: 'column', xs: 'row' }} justify="center" align="center" gap="md" mt="xl">
                <Button
                  hiddenFrom="sm"
                  component={Link}
                  to="/create"
                  size="md"
                  variant="gradient"
                  gradient={{ from: 'grape', to: 'violet', deg: 135 }}
                  viewTransition
                >
                  Build for free
                </Button>
                <Button
                  visibleFrom="sm"
                  component={Link}
                  to="/create"
                  size="md"
                  variant="gradient"
                  gradient={{ from: 'grape', to: 'violet', deg: 135 }}
                  viewTransition
                >
                  Build for free
                </Button>
                <GitHubStarButton hiddenFrom="sm" size="md" variant="light" />
                <GitHubStarButton visibleFrom="sm" size="md" variant="light" />
              </Flex>
            </Stack>
            <Box
              style={{
                border: '1px solid var(--mantine-color-default-border)',
                borderRadius: 'var(--mantine-radius-md)',
                boxShadow: 'var(--mantine-shadow-sm)',
                zIndex: 1,
              }}
              h="100%"
              w="100%"
              mah="700px"
              maw="1200px"
              mt="xl"
              mb={{ base: 50, sm: 100 }}
            >
              <Image
                src={editorDark}
                alt={`${SITE_NAME} create page screenshot`}
                radius="md"
                loading="eager"
                w="100%"
                style={{ aspectRatio: '16/9' }}
                bg="var(--mantine-color-dark-9)"
              />
            </Box>
            <Flex component="section" direction="column" gap="md" mb={40}>
              <Title order={2} fz={{ base: '1.5rem', sm: '2rem' }} ta="center">
                Who is CvrSnap for?
              </Title>
              <List
                maw={650}
                mx="auto"
                spacing="md"
                center
                icon={
                  <ThemeIcon color="green" size={24} radius="xl">
                    <CheckCircleSolid width={16} height={16} color="white" />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <Text fz={{ base: 'sm', sm: 'lg' }}>
                    Someone who needs a simple good looking blog cover image with text as the highlight, usually for the
                    blog title and author.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text fz={{ base: 'sm', sm: 'lg' }}>
                    You don't want a cover image from an internet image platform.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text fz={{ base: 'sm', sm: 'lg' }}>
                    You don't want to spend hours starting from scratch. You just want to pick some background preset templates and colors,
                    maybe change some font settings and add your text.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text fz={{ base: 'sm', sm: 'lg' }}>
                    You want to do all of this in a modern and user-friendly editor.
                  </Text>
                </List.Item>
              </List>
            </Flex>
          </Flex>
        </Container>
        <Footer />
      </Box>
    </>
  );
}
