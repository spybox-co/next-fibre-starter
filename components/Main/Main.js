import mainStyles from './Main.module.scss';
import wrapperStyles from '../Wrapper/Wrapper.module.scss';

export const Main = ({ children, className, wrapper }) => {
  const classes = {
    root: [className, mainStyles.module, wrapperStyles.grid].join(' ').trim(),
    grid: [className, mainStyles.module].join(' ').trim()
  };

  if (wrapper) {
    return (
      <main className={classes.grid}>
        {children}
      </main>
    );
  } else {
    return (
      <main className={classes.root}>
        {children}
      </main>
    );
  }
};
