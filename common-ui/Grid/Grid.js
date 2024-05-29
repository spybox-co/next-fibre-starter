import { cn } from 'utils/helpers';

// import styles from './Layout.module.scss'

export default function Grid ({ children, id, theme, className }) {
  const classes = cn(className, 'fbr--grid', theme && `container ${theme}`)
  return(
    <div id={id} className={classes}>{children}</div>
  )
}
