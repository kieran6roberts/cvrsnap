import { Button, Container, Stack } from '@mantine/core';
import { Link } from 'react-router';

import { Navbar } from '~/shared/layouts/Navbar';
import { Footer } from '~/shared/layouts/Footer';
import classes from '~/shared/styles/404.module.css';

export default function NotFound() {
  return (
    <>
      <Container size="xl">
        <Stack justify="space-between" align="center" h="100vh">
          <Navbar />
          <Stack justify="center" align="center" className={classes.content}>
            <h1 className={classes.title}>404</h1>
            <p className={classes.copy}>
              Page not found. Let me help you find your way back so you can create a great blog cover image.
            </p>
            <Button component={Link} to="/">
              Go back to home
            </Button>
          </Stack>
          <div className={classes.footerWrapper}>
            <Footer />
          </div>
        </Stack>
      </Container>
    </>
  );
}
