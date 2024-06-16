import { useState, useEffect, Suspense, lazy } from 'react';
import { cn } from '@/utils/helpers';

import { PredictImage } from '../PredictImage';
import { RatioObject, Skeleton } from '@/common-ui';


import styles from './PredictGalery.module.scss';

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

// import styles from './PredictGallery.module.scss';

export const PredictGallery = ({ loading, predictions, predict, results }) => {
  const [images, setImages] = useState(predictions);
  const [myTime, setMyTime] = useState(new Date());
  const [showPredict, setShowPredict] = useState(predict);

  const [showResults, setShowResults] = useState(results || 6);

  const predictSlots = Array.from(Array(9).keys());


  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  }, [myTime]);

  function tick() {
    setMyTime(new Date());
  }

  // useEffect(() => {
  //   if (loading) return;
  // }, [loading]);

  useEffect(() => {
    console.log("Very first render", predictions);
  }, []);

  useEffect(() => {
    if (images !== predictions) {
      console.log("update", images, predictions);
      setImages(predictions);
    }

  }, [predictions]);

  // useEffect(() => {
  //   if (predictions && predictions.length > showResults) {
  //     setShowResults(predictions.length);
  //   }
  // }, [predictions]);

  useEffect(() => {
    if (images && images.length > showResults) {
      setShowResults(images.length);
    }
  }, [images]);

  useEffect(() => {
    if (showPredict !== predict) {
      console.log("set Predict", predict);
      setShowPredict(predict);
    }
  }, [predict]);

  const classes = {
    root: cn(styles.module, 'PredictsSet', 'PreRendered'),
    list: cn(styles.list)
  }

  return (
    <div className={classes.root}>
      {loading && (
        <pre
          style={{
            color: "black",
            backgroundColor: "white",
            padding: 16,
            overflowX: "hidden",
          }}
        >
          <div>
            <small>Loading... Please wait!</small>
          </div>
        </pre>
      )}


      {images && (
        <>
          <h3>Results with success {images.filter( i => i.success === true ).length} of all {images.length}</h3>
          <p className="responsive-paragraph-02">Slots {showResults}</p>
        </>
      )}

      {/* 
          @NEED TO BE IMPROVED
          Solution returns always 1 results more than presented in gallery, see console and numbers in heading
      */}

      <ul className={classes.list}>

        {!loading && showPredict && predictSlots.slice(0, showResults).map(item => (
          <PredictGaleryItem key={item} source={images ? images[item] : null} />
        ))}

      </ul>

      <TestTileItem />



    </div>
  );
};


const PredictGaleryItem = (props) => {
  
  const { 
    image,
    source, 
  } = props;
  
  
  
  const col = {
    small: 4,  // of 4
    medium: 4, // of 8
    large: 4,  // of 12
    max: 3     // of 12
  }

  const classes = {
    root: cn('fbr--column', 'col-4', `col-sm-${col.small}`, `col-md-${col.medium}`, `col-lg-${col.large}`),
  }

  if (!source) {
    return (
      <li className={classes.root}>
        <RatioObject ratio="1x1" className={styles.item}>
          <Skeleton />
        </RatioObject>
      </li>
    );
  } else if (source && source.success === true) {
    return (
      <li className={classes.root}>
        <RatioObject ratio="1x1" className={styles.item}>
          <PredictImage
            source={source}
            altText="Generated image with prompt"
          />
        </RatioObject>
      </li>
    );
  } else if (source.success === false) {
    return null;
  }
}

export const Loading = () => (
  <p>LOADING</p>
)

export const TestTileItem = () => (
  <>
      <h3>Test Tile</h3>
      <ul className={styles.list}>
        <li className="fbr--column col-4 col-sm-4 col-md-8 col-lg-6">
          <RatioObject ratio="1x1" className={styles.item}>
            <PredictImage
              source={{ output: "https://ozgrozer.github.io/100k-faces/0/3/003443.jpg"}}
              altText="Generated image with prompt"
            />
          </RatioObject>
        </li>
      </ul>
  </>
)