import classes from '~/features/landing/styles/features.module.css';
import { FeatureCard } from '~/features/landing/components/FeatureCard';
import { FEATURES } from '~/features/landing/consts';

export function FeatureList() {
  return (
    <div className={classes['features-container']}>
      {FEATURES.map((feature, index) => (
        <FeatureCard key={index} highlight={feature.renderHighlight()} index={index} {...feature} />
      ))}
    </div>
  );
}
