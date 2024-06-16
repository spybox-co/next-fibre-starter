import { cn } from '@/utils/helpers';

export default function Grid (props) {

  const { 
    className,
    children, 
    id, 
    theme
  } = props;

  const classes = cn(className, 'fbr--grid', theme && `container ${theme}`);

  return(
    <div id={id} className={classes}>{children}</div>
  )
}
