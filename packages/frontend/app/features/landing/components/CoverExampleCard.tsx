import { motion } from 'motion/react';

import classes from '~/features/landing/styles/covers.module.css';

export function CoverExampleCard({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.article initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <motion.img src={src} alt={alt} width={300} height={178} className={classes['covers-list--image']} />
    </motion.article>
  );
}
