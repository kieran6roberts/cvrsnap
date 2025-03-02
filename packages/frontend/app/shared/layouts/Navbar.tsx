import { Box, Flex, Image, Text, Button } from '@mantine/core';
import { Link, useLocation } from 'react-router';

import { ThemeToggle } from '~/shared/components/ThemeToggle';
import { GitHubStarButton } from '~/shared/components/GitHubStarButton';
import { MobileGithubButton } from '~/shared/components/MobileGitHubButton';
import { SITE_NAME, CREATE_ROUTE } from '~/config/consts';

import classes from './styles/Navbar.module.css';

export function Navbar() {
  const { pathname } = useLocation();
  const isEditorPage = pathname === CREATE_ROUTE;
  return (
    <Box component="header" w="100%" className={classes['main-header']}>
      <Flex component="nav" justify="space-between" align="center" h="100%" w="100%" px="lg">
        <Flex
          component={Link}
          to="/"
          align="center"
          gap="xs"
          aria-label={`${SITE_NAME} logo`}
          style={{ textDecoration: 'none' }}
          viewTransition
        >
          <Image src="/favicon.ico" width={32} height={32} alt={`${SITE_NAME} logo`} />
          <Text component="span" size="lg" fw={500}>
            {SITE_NAME}
          </Text>
        </Flex>

        <Flex gap="lg" align="center">
          <Flex gap="xs" align="center">
            <GitHubStarButton visibleFrom="md" size="sm" variant="outline" />
            {!isEditorPage ? (
              <Button component={Link} to="/create" size="sm" viewTransition>
                Editor
              </Button>
            ) : null}
          </Flex>
          <MobileGithubButton />
          <ThemeToggle size="xl" />
        </Flex>
      </Flex>
    </Box>
  );
}
