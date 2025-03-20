import { Button } from '@mantine/core';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import classes from '~/features/landing/styles/editorcta.module.css';

export function EditorCTA() {
  return (
    <div className={classes.container}>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={classes.title}
      >
        What are you waiting for?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={classes.copy}
      >
        Don't put off that blog post that you've been meaning to finish. Create a cover image in minutes with CvrSnap so
        you can publish faster.
      </motion.p>
      <Button component={Link} to="/create" size="sm" hiddenFrom="md" variant="white" viewTransition>
        Start for free
      </Button>
      <Button component={Link} to="/create" size="md" visibleFrom="md" variant="white" viewTransition>
        Start for free
      </Button>
    </div>
  );
}
