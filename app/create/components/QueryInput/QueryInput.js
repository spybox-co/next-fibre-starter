import { useEffect, useState, useRef } from 'react';

import { Wrapper } from '@/components';
import { Button, Input } from '@/common-ui';

import styles from "./QueryInput.module.scss";

/*
  @ SEE Solution at Codepen
  https://codepen.io/vsync/pen/bGbmqZe?editors=0110
  https://dev.to/producthackers/intersection-observer-using-react-49ko
*/

export const QueryInput = (props) => {
  const {
    // sticky = false,
    onChange,
    onClick,
    onKeyDown,
    onSubmit,
    onAction,
    placeholder,
    value,
    loading,
  } = props;

  const stickyElement = useRef();
  const [isSticky, setIsSticky] = useState(false);

  const observerSettings = {
    threshold: 1.0,
  };

  const handler = (entries) => {
    const [entry] = entries;

    // entries is an array of observed dom nodes
    // we're only interested in the first one at [0]
    // because that's our .sentinal node.
    // Here observe whether or not that node is in the viewport

    if (entry.intersectionRatio < 1) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // console.log(stickyElement);

    let observer = new IntersectionObserver(
      (event) => handler(event),
      observerSettings,
    );

    if (stickyElement.current) {
      observer.observe(stickyElement.current);
    }

    // unmount
    return () => {
      if (stickyElement.current) {
        observer.unobserve(stickyElement.current);
      }
    };
  }, [stickyElement, isSticky]);

  return ( 
    <div className={styles.module} data-sticky={isSticky} ref={stickyElement}>
      <div className={styles.container}>
        <Input 
          className={styles.input}
          type="text"
          // name="query"
          minLength={3}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          placeholder={placeholder}
        />
        <Button
          kind="primary"
          label="Create"
          className={styles.submit}
          renderIcon="CornerDownLeft"
          // type="Submit"
          onClick={onClick}
          disabled={loading}
          // disabled={true}
        />



      </div>
    </div>
  );
};


const Bin = () => {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        // name="query"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        placeholder={placeholder}
      />
      <button
        className={styles.submit}
        // type="Submit"
        onClick={onClick}
        disabled={loading}
      >
        Run ↵
      </button>
    </>
  )
}