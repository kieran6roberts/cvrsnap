import { motion } from 'motion/react';
import { Divider } from '@mantine/core';

import classes from '~/features/landing/styles/section.module.css';

export function SectionHeader({ title, copy, isCenter = false }: { title: string; copy?: string; isCenter?: boolean }) {
  return (
    <div className={classes['landing-section--header']}>
      <motion.h2
        className={`${classes['landing-section--title']} ${isCenter ? classes['landing-section--title-center'] : ''}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {copy ? (
        <>
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
      ) : null}
    </div>
  );
}
