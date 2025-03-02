import classes from './GridBackground.module.css';

export const GridBackground = () => {
  return (
    <div className={classes['grid-bg']}>
      <div className={classes['column-gutter']} />
      <div className={classes.column} />
      <div className={classes.column} />
      <div className={classes.column} />
      <div className={classes.column} />
      <div className={classes.column} />
      <div className={classes.column} />
      <div className={classes['column-gutter']} />
    </div>
  );
};
