import { motion } from 'motion/react';
import classes from '~/features/landing/styles/features.module.css';

export function FeatureDescription({ copy }: { copy: string }) {
  return <motion.p className={classes['feature-description']}>{copy}</motion.p>;
}
