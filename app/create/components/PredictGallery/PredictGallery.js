import { useState, useEffect, useCallback } from 'react';

import { PredictImage } from '../PredictImage';
// import styles from './PredictGallery.module.scss';

export const PredictGallery = ({ loading, predictions }) => {
  const [images, setImages] = useState(predictions);
  const [myTime, setMyTime] = useState(new Date());

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
      // forceUpdate();
    }
  }, [predictions]);

  return (
    <div className="Gallery PredictsSet PreRendered">
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

      <ul>
        {images &&
          images.map((image, i) => (
            <li key={i}>
              <PredictImage
                image={image}
                source={`${image.output}`}
                altText="Generated image with prompt"
                downloadData={`created image  - ${image.id} - ${image.input}`}
              />
            </li>
          ))}
      </ul>

    </div>
  );
};
