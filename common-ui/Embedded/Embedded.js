import React from 'react';
import { cn } from '@/utils/helpers';

import { Grid, Row, Column } from '@/common-ui/Grid'
import { Card, CardGroup, ImageCard, Tile, ClickableTile, StaticTile } from '@/common-ui';
import RatioObject from '../RatioObject';

import styles from './Embedded.module.scss';


/*
  MDN DOCS:
  https://www.w3schools.com/tags/tag_iframe.asp
*/

const Embedded = (props) => {

  const {
    allow,
    allowFullScreen,
    height,
    loading,
    ratio,
    sandbox,
    src,
    srcDoc,
    width,
    noscrolling
  } = props;

  const frameProps = {
    allow,
    allowFullScreen,
    height,
    sandbox,
    src,
    srcDoc,
    width
  }

  const FrameElement = (
    <iframe 
      className={styles.frame}
      {...frameProps}
      loading={loading ? 'true' : null}
    />
  );
  
  if (ratio) {
    return(
      <RatioObject ratio={ratio}>
        {FrameElement}
      </RatioObject>
    );
  } else {
    return FrameElement;
  }


}

export default Embedded;


Embedded.defaultProps = {
  loading: true,
  src: 'https://fibre-icons.netlify.app'
};