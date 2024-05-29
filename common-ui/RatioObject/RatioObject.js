import { cn } from 'utils/helpers';

export default function RatioObject(props) {

  const { 
    children,
    ratio,
    className,
    // Todo: to consider these properties
    col, 
    noGutter, 
    gutter, 
    gutterLeft, 
    gutterRight, 
  } = props;

  const aspectRatio = cn(`aspect-ratio`, ratio && ratio !== true && `aspect-ratio--${ratio}`, ratio === true && 'aspect-ratio--3x1')


  const classes = {
    root: aspectRatio, //ratio && aspectRatio,
    container: 'aspect-ratio--object',
  }


  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {children}
      </div>
    </div>
  )
}

RatioObject.defaultProps = {
  ratio: true
}
