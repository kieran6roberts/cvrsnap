import classes from '~/features/landing/styles/covers.module.css';
import { CoverExampleCard } from '~/features/landing/components/CoverExampleCard';
import { COVER_EXAMPLES } from '~/features/landing/consts';

export function CoverExampleList() {
  return (
    <section className={classes['covers-list']}>
      {COVER_EXAMPLES.map((example, index) => (
        <CoverExampleCard key={index} src={example.src} alt={example.alt} />
      ))}
    </section>
  );
}
