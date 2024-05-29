import { cn } from 'utils/helpers';

// import styles from './Layout.module.scss'

export default function Row (props) {

  const { 
    children, 
    className,
    style 
  } = props;

  const classes = cn(className, 'fbr--row')
  return(
    <div 
      className={classes} 
      style={style ? style : null} 
    >
      {children}
    </div>
  )
}