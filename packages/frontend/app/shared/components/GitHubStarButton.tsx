import { Flex, Button, ButtonProps } from '@mantine/core';
import { Link } from 'react-router';
import { Github } from 'iconoir-react';

import { GITHUB_URL } from '~/config/consts';

interface GitHubStarButtonProps extends ButtonProps {
  copy?: string;
}

export function GitHubStarButton({ copy = 'Github', ...props }: GitHubStarButtonProps) {
  return (
    <Button component={Link} target="_blank" to={GITHUB_URL} {...props}>
      <Flex align="center" gap="xs">
        <Github width={16} /> {copy}
      </Flex>
    </Button>
  );
}
