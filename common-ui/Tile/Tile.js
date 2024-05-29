import React from 'react';
import { Column } from '@/common-ui/Grid';
import RatioObject from 'components/RatioObject';

import Link from 'next/link';

import { cn } from 'utils/helpers';



export default function Tile(props) {

  const { 
    className,
    children,
    clickable,
    href, 
    subtitle, 
    title, 
    dark, 
    col, 
    noGutter, 
    gutter, 
    gutterLeft, 
    gutterRight, 
    ratio 
  } = props;

  const columnProps = {
    col: col,
    noGutter: noGutter,
    gutter: gutter,
    gutterLeft: gutterLeft,
    gutterRight: gutterRight
  }

  let isLink;
  if (href !== undefined) {
    isLink = href.charAt(0) === '/';
  }

  const classes = {
    tile: cn(className ? className : 'Tile', 'fbr-tile', dark && 'dark' ),
    container: 'Tile-container'
  }

  const TileContainer = (
    <>
      {subtitle && <Subtitle content={subtitle} />}
      {title && <Title content={title} />}
      {children}
    </>
  )

  let TileComponent;

  if (clickable) {
    TileComponent = (
      <a href={href} className={classes.tile}>
        {TileContainer}
      </a>
    );
  } else if (clickable && isLink === true) {
    TileComponent = (
      <Link href={href}>
        <a className={classes.tile}>
          {TileContainer}
        </a>
      </Link>
    );
  } else {
    TileComponent = (
      <div className={classes.tile}>
        {TileContainer}
      </div>
    );
  }

  // TODO: to consider if Column feature is needed

  if (col) {
    return(
      <Column {...columnProps}>
        {TileComponent}
      </Column>
    );
  } else if (ratio) {
    return (
      <RatioObject>
        {TileComponent}
      </RatioObject>
    );
  } else {
    return(
      <>{TileComponent}</>
    );
  }
}

Tile.defaultProps = {
  ratio: false,
  noGutter: true,
  // gutter: false,
  // subtitle: undefined,
  // title: 'Title',
};


export const ClickableTile = (props) => {

  const { 
    className, 
    children,
    empty,
    href,
    subtitle, 
    title,
    col, 
    noGutter, 
    gutter, 
    gutterLeft, 
    gutterRight, 
    spacing,
    ratio 
  } = props;


  const tileProps = {
    href: href,
    ratio: ratio,
    col: col,
    noGutter: noGutter,
    gutter: gutter,
    gutterLeft: gutterLeft,
    gutterRight: gutterRight
  }

  const classes = {
    tile: 'ClickableTile'
  }

  const TileComponent = (
      <Tile className={classes.tile} {...tileProps} clickable>
        {children}
      </Tile>
  );
  
  return(
    <>{TileComponent}</>
  );
}

ClickableTile.defaultProps = {
  ratio: false,
  noGutter: true,
  spacing: false
  // gutter: false,
  // subtitle: undefined,
  // title: 'Title',
};


export const StaticTile = (props) => {

  const { 
    className, 
    children,
    empty,
    subtitle, 
    title,
    col, 
    noGutter, 
    gutter, 
    gutterLeft, 
    gutterRight, 
    spacing,
    ratio 
  } = props;


  const tileProps = {
    ratio: ratio,
    col: col,
    noGutter: noGutter,
    gutter: gutter,
    gutterLeft: gutterLeft,
    gutterRight: gutterRight
  }

  const classes = {
    tile: 'StaticTile'
  }

  let TileComponent;
  if (empty === true) {
    TileComponent = (
      <Tile className={classes.tile} {...tileProps}>
        {children}
      </Tile>
    );
  } else {
    TileComponent = (
      <Tile className={classes.tile} {...tileProps}>
        {children}
      </Tile>
    );
  }


  return(
    <>{TileComponent}</>
  );
}

StaticTile.defaultProps = {
  ratio: false,
  noGutter: true,
  spacing: false
  // gutter: false,
  // subtitle: undefined,
  // title: 'Title',
};





const Subtitle = props => {
  const { content } = props;
  return(
    <h4 className="Tile-subtitle">{content}</h4>
  )
}
const Title = props => {
  const { content } = props;
  return(
    <h3 className="Tile-title ExpressiveHeading-01">{content}</h3>
  )
}