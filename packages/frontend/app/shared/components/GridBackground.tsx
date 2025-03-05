import classes from './GridBackground.module.css';

export const GridBackground = () => {
  return (
    <div className={classes['grid-bg']}>
      <div aria-hidden="true" className={classes['column-gutter']} />
      <div aria-hidden="true" className={classes.column} />
      <div aria-hidden="true" className={classes.column} />
      <div aria-hidden="true" className={classes.column} />
      <div aria-hidden="true" className={classes.column} />
      <div aria-hidden="true" className={classes.column} />
      <div aria-hidden="true" className={classes.column} />
      <div aria-hidden="true" className={classes['column-gutter']} />
    </div>
  );
};
