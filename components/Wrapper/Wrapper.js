import styles from './Wrapper.module.scss';

const Wrapper = ({ children, className, ...other }) => {
  const classes = {
    root: [className, styles.grid, 'Wrapper'].join(' ').trim()
  };
  return <div className={classes.root} {...other}>{children}</div>;
};

export default Wrapper;
