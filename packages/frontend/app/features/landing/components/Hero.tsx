import { Stack, Badge, Title, Text, Button, Flex } from '@mantine/core';
import { Link } from 'react-router';
import { ArrowUpRight, MapsArrowDiagonal, CheckCircle } from 'iconoir-react';

import { ThemeToggle } from '~/shared/components/ThemeToggle';
import { SITE_CASE_STUDY_URL, SITE_NAME } from '~/config/consts';
import { GitHubStarButton } from '~/shared/components/GitHubStarButton';
import classes from '~/features/landing/styles/hero.module.css';

export function Hero() {
  return (
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
          A great blog post needs a great cover. CvrSnap helps you create stunning blog cover images in seconds with
          easy-to-use templates and editing tools.
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
          <GitHubStarButton darkHidden fullWidth size="md" variant="outline" bg="white" copy="GitHub" />
          <GitHubStarButton
            lightHidden
            fullWidth
            size="md"
            variant="outline"
            bg="var(--mantine-color-gray-9)"
            copy="GitHub"
          />
        </Flex>
        <Flex align="center" justify="center" gap="xs">
          <CheckCircle width={24} height={24} opacity={0.9} />
          <p className={classes['hero-section-content--message']}>
            Save unlimited images for <span className={classes['hero-section-content--message-free']}>free</span>.
          </p>
        </Flex>
      </Stack>
    </Flex>
  );
}
