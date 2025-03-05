import classes from '~/features/landing/styles/section.module.css';

export function SectionContainer({ children }: { children: React.ReactNode }) {
  return <section className={classes['landing-section']}>{children}</section>;
}
