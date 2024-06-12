import { useState, Suspense, lazy } from 'react';

import { Button, IconButton } from '@/common-ui';
import { Skeleton } from '@/common-ui';
// import { StaticTile, Tile, Column, RatioObject } from '@/common-ui';

// import Image from '@/common-ui/Image/Image';

const Image = lazy(() => delayForDemo(import('@/common-ui/Image/Image.js')));

import styles from './PredictImage.module.scss';

export const PredictImage = (props) => {
  const { 
    source,
    image, 
    altText = "null", 
  } = props;



  if (source) {
    return (
      <Suspense fallback={<Skeleton />} >

        <Image className={styles.image} src={source.output || image} alt={altText} />

        <div className={styles.actions}>
          <IconButton anchor href={source.output || image} download={`created image - ${source.id} - ${source.input}`} renderIcon="Download" />
        </div>

      </Suspense>
    );
  } else {
    return null;
  }
};


// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}
