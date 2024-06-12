import { useState, useEffect } from "react";
import styles from "./Console.module.scss";

export const Console = ({ loading, predictions }) => {
  const [images, setImages] = useState(predictions);
  const [myTime, setMyTime] = useState(new Date());

  useEffect(() => {
    if (images !== predictions) {
      console.log("update", images, predictions);
      setImages(predictions);
      // forceUpdate();
    }
  }, [predictions]);

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  }, [myTime]);

  function tick() {
    setMyTime(new Date());
  }
  return (
    <div className={styles.module}>
      {images && (
        <>
          <h4>Results console</h4>
          <pre>
            <div>
              <small>Date: </small>
              <small>{`${myTime}`}</small>
              <br />
            </div>
          </pre>

          {loading && (
            <pre>
              <div>
                <small>Loading... Please wait!</small>
              </div>
            </pre>
          )}
          {!loading && images && (
            <div>
              {images.map((image, i) => (
                <pre key={i}>
                  <small>Image index: {i}</small>
                  <br />
                  <small>{JSON.stringify(image, null, 2)}</small>
                </pre>
              ))}
              {/* <small>{JSON.stringify(images[0], null, 2)}</small> */}
              {/* <small>{JSON.stringify(images, null, 2)}</small> */}
            </div>
          )}
        </>
      )}
    </div>
  );
};
