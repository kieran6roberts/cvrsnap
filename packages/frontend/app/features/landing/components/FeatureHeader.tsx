import { motion } from 'motion/react';
import classes from '~/features/landing/styles/features.module.css';

export function FeatureHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <motion.h3 className={classes['feature-title']}>
      <div className={classes['feature-title-icon']}>{icon}</div>
      {title}
    </motion.h3>
  );
}
