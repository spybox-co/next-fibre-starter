import React from 'react';
import { Column } from 'layout/Grid';
import Tile from 'components/Tile';
import Icon from 'components/Icon';
import Image from 'components/Image';

import { cn } from 'utils/helpers';



export default function ImageCard(props) {

  const { children, dark, ratio, nospacing, image } = props;

  const columnProps = {
    colSm: props.colSm,
    colMd: props.colMd,
    colLg: props.colLg,
    col: props.col,
    noGutter: props.noGutter,
    gutter: props.gutter,
    gutterLeft: props.gutterLeft,
    gutterRight: props.gutterRight
  }

  const tileProps = {
    subtitle: props.subtitle,
    title: props.title,
    href: props.href,
    dark: props.dark,
  }

  const aspectRatio = cn(`aspect-ratio`, ratio !== true ? `aspect-ratio--${ratio}` : 'aspect-ratio--1x1')

  const classes = {
    card: cn('ImageCard','Card', dark && 'dark'),
    aspect: cn(ratio && aspectRatio, !nospacing && 'card--spacing'), // !nospacing && 'card--spacing'
    container: cn('Card-container', ratio && 'aspect-ratio--object'), // 'Card-container', 
    image: cn('Card-image'),
    action: cn('Card-action')
  }

  const Img = 
    <div className={classes.image}>
      {!image && children}
      {image && !children && <Image src={image} />}
    </div>

  const Action =
    <div className={classes.action}>
      <Icon name="ArrowRight" />
    </div>


  const Element = 
    <div className={classes.card}>
      <div className={classes.aspect}>
        <div className={classes.container}>

            <Tile {...tileProps} >
              {Img}
              {Action}
            </Tile>
            


        </div>
      </div>
    </div>


  if (props.col) {
    return(
      <Column {...columnProps}>
        {Element}
      </Column>
    );
  } else {
    return(
      <>{Element}</>
    );
  }
}

ImageCard.defaultProps = {
  ratio: true,
  noGutter: true,
  // gutter: false,
  // subtitle: 'Subtitle',
  title: 'Image Card Title',
  dark: false
};