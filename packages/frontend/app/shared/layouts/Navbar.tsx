import { Box, Flex, Button } from '@mantine/core';
import { Link, useLocation } from 'react-router';

import { ThemeToggle } from '~/shared/components/ThemeToggle';
import { GitHubStarButton } from '~/shared/components/GitHubStarButton';
import { MobileGithubButton } from '~/shared/components/MobileGitHubButton';
import { CREATE_ROUTE } from '~/config/consts';
import { Logo } from '~/shared/components/Logo';

import classes from './styles/Navbar.module.css';

export function Navbar() {
  const { pathname } = useLocation();
  const isEditorPage = pathname === CREATE_ROUTE;
  return (
    <Box component="header" w="100%" className={classes['main-header']}>
      <Flex component="nav" justify="space-between" align="center" h="100%" w="100%">
        <Logo />

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
          <ThemeToggle size="lg" />
        </Flex>
      </Flex>
    </Box>
  );
}
