import { useEffect, useState, useRef, useContext, useMemo } from 'react';
import { store } from '@/app/create/context/store.js';

// import { Wrapper } from '@/components';
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
    // onChange,
    // onClick,
    // onKeyDown,
    // onSubmit,
    // onAction,
    placeholder = "Dupa",
    // value,
    loading,
  } = props;

  const { state, dispatch } = useContext(store);

  const { prompt } = state;

  const stickyElement = useRef();
  const [isSticky, setIsSticky] = useState(false);
  const [value, setValue] = useState('');
  // const [prompt, setPrompt] = useState('a cute cat');



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
    // dispatch({ type: 'set prompt', value: 'value'});
    console.log("prąpt:", prompt );
    if (prompt !== value) {
      setValue(prompt);
    }
  }, [prompt] )

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


  const setPredict = () => {

    // validate with longer prompt
    setTimeout(() => dispatch({ type: 'set predict', value: true }), 100);
  }



  const handleChange = (event) => {
    // dispatch({ type: 'set prompt', value: event.target.value});
    // setValue(event.target.value);
    dispatch({ type: 'set prompt', value: event.target.value });

    // setTimeout(() => dispatch({ type: 'set predictions', value: event.target.value }), 100);
    console.log(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("enter");
      
      setPredict();
    }
  };


  const eventHandlers = useMemo(
    () => ({
      onChange(event) {
        handleChange(event);
      },
    }),
    []
  );

  return ( 
    <div className={styles.module} data-sticky={isSticky} ref={stickyElement}>
      <div className={styles.container}>
        <Input 
          className={styles.input}
          type="text"
          // name="query"
          minLength={3}
          // onChange={(event) => handleChange(event)}
          {...eventHandlers}
          onKeyDown={handleKeyDown}
          value={value}
          // placeholder={placeholder}
          placeholder="Please enter a prompt ie. 'a cute cat' or use some samples below"
        />
        <Button
          kind="primary"
          label="Create"
          className={styles.submit}
          renderIcon="CornerDownLeft"
          // type="Submit"
          onClick={setPredict}
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
        placeholder={placeholder || "Please"}
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