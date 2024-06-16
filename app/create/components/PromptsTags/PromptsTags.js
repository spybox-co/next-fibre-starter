import { useState, useContext } from 'react';
import { store } from '@/app/create/context/store.js';


import styles from './PromptsTags.module.scss';

export const PromptsTags = ({ loading, changePrompt }) => {
  const { state, dispatch } = useContext(store);

  // const { prompt } = state;



  const prompts = [
    "A colorful abstract painting",
    "An astronaut on a unicorn",
    "A futuristic city skyline",
    "A cute cat",
    "A whimsical fantasy landscape",
    "A hamster walking down the street",
    "A portrait of a thoughtful person",
    "A serene nature scene",
  ];

  const classes = {
    root: styles.module,
    text: styles.leadText,
    list: styles.tagList,
    item: ["TagItem", loading ? "disabled" : ""].join(" ").trim(),
    tag: "tag",
  };


  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <h6>Or try one of these sample prompts:</h6>
      </div>
      
      <ul className={classes.list}>

        {prompts.map((sample, i) => (
          <li key={i} >
            <button 
              className={classes.item}
              
              onClick={() => {
              // changePrompt(sample)
                dispatch({ type: 'change prompt', value: sample })
              }}
            >
              <span className={classes.tag}>{sample} ↗</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

