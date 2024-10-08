'use client'

import { useState } from 'react';
import styles from './Image.module.scss';

// @See Docs
// https://github.com/FormidableLabs/react-progressive-image/blob/master/src/index.js

// @See this package, modernized this from FormidableLabs
// https://www.npmjs.com/package/react-progressive-graceful-image

// @See rendering options of <img> element
// https://docs.imgix.com/apis/rendering/auto/auto

const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key];
    }
    return result;
  }, {});

const overlayStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  filter: 'blur(16px)',
  transition: 'opacity ease-in 1000ms',
  clipPath: 'inset(0)',
  zIndex: 1
};

export default function Image(props) {
  const [state, setState] = useState({ highResImageLoaded: false });
  const { 
    overlaySrc, 
    src, 
    alt = 'Add Alt Text',
    ...others 
  } = props;

  const { highResImageLoaded } = state;
  let filteredProps = omit(props, 'overlaySrc');
  // console.log(filteredProps);
  let overrideStyle = highResImageLoaded && { opacity: '0' };

  // ?auto=compress&cs=tinysrgb&dpr=2&w=5


  let isBase64;
  if (src !== undefined) {
    isBase64 = src.includes('base64');
  }

  const classes = {
    root: 'fbr--image', // styles.container
  }

  if (isBase64) {
    return (
      <div className={classes.root}>
        {/* <span style={{ position: 'absolute' }}>Jest bejz 64</span> */}
        <img
          {...filteredProps}
          onLoad={() => {
            setState({ highResImageLoaded: true });
          }}
          src={`${src}`}
          alt={`${alt}`}
          // alt={highResImageLoaded && `${alt}`}
          {...others}
        />

        {!highResImageLoaded && (
          <img
            {...filteredProps}
            className={props.className}
            style={{ ...overlayStyles, ...overrideStyle }}
            src={overlaySrc || `${src}`}
            alt={`${alt}`}
            {...others}
          />
        )}
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <img
          {...filteredProps}
          onLoad={() => {
            setState({ highResImageLoaded: true });
          }}
          src={`${src}?q=50`}
          alt={`${alt}`}
          {...others}
        />

        {!highResImageLoaded && (
          <img
            {...filteredProps}
            className={props.className}
            // {...(highResImageLoaded && { style: { opacity: '0' } })}
            style={{ ...overlayStyles, ...overrideStyle }}
            src={overlaySrc || `${src}?q=10&cs=tinysrgb&dpr=2&w=5`}
            alt={`${alt}`}
            {...others}
          />
        )}
      </div>
    );
  }
}

/*
        className={'cover'}
        alt={'woman'}
        overlaySrc={
          'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5'
        }
        src={
          'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=7000'
        }
*/
