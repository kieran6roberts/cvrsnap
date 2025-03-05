import classnames from 'classnames';
import { motion } from 'motion/react';
import classes from '~/features/landing/styles/features.module.css';
import { FeatureHeader } from '~/features/landing/components/FeatureHeader';
import { FeatureDescription } from '~/features/landing/components/FeatureDescription';

export function FeatureCard({
  title,
  copy,
  icon,
  highlight,
  classNames,
  index = 0
}: {
  title: string;
  copy: string;
  icon: React.ReactNode;
  highlight: React.ReactNode;
  classNames: string[];
  index?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={classnames(
        classes['feature-section'],
        classNames.map((className) => classes[className])
      )}
    >
      {highlight ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className={classes['feature-highlight-container']}
        >
          {highlight}
        </motion.div>
      ) : null}
      <div className={classes['feature-body']}>
        <FeatureHeader icon={icon} title={title} />
        <FeatureDescription copy={copy} />
      </div>
    </motion.section>
  );
}
