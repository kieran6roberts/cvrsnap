import { Flex } from '@mantine/core';
import { Link } from 'react-router';
import { SITE_NAME } from '~/config/consts';
import classes from '~/shared/components/styles/Logo.module.css';

export function Logo() {
  return (
    <Flex
      component={Link}
      to="/"
      align="center"
      gap="xs"
      aria-label={`${SITE_NAME} logo`}
      viewTransition
      className={classes.logo}
    >
      <img src="/favicon.ico" width={24} height={24} alt={`${SITE_NAME} logo`} />
      <span className={classes['logo-title']}>{SITE_NAME}</span>
    </Flex>
  );
}
