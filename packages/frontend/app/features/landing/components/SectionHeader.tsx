import { motion } from 'motion/react';
import { Divider } from '@mantine/core';

import classes from '~/features/landing/styles/section.module.css';

export function SectionHeader({ title, copy }: { title: string; copy: string }) {
  return (
    <>
      <motion.h2
        className={classes['landing-section--title']}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <Divider variant="dashed" />
      <motion.p
        className={classes['landing-section--copy']}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {copy}
      </motion.p>
    </>
  );
}
