
'use client';


import { useState, useEffect, useContext } from 'react';
import { store } from './context/store.js';


// import { defaultQuery, predicts } from './utils/defaultQuery';
import { generateToken } from './lib/func';
import { HF, HF_OLD } from './lib/text-to-image';
import * as MODEL from './lib/ai-models';

import { QueryInput } from './components/QueryInput';
import { PromptsTags } from './components/PromptsTags';
import { PredictGallery } from './components/PredictGallery';
import { Console } from './components/Console';


import { Header, Main, Footer, Wrapper } from '@/components';

import { BumperSection } from '@/common-ui';



import './styles.scss';

export default function Home() {
  const { state, dispatch } = useContext(store);

  const { predict, predictions, prompt } = state;
  
  const [loading, isLoading] = useState(false);
  // const [predict, setPredict] = useState(null); //predicts.wizmodel
  // const [prompt, setPrompt] = useState('a cute cat');
  const [value, setValue] = useState('');

  // const [predict, setPredict] = useState(false); //set start gallery

  // const [predictions, setPredictions] = useState(null); //predicts.wizmodel

  // const [image, setImage] = useState(null);

  const queryChain = [
    MODEL.SD21,
    MODEL.SD15,
    MODEL.SD21BASE,
    MODEL.DALLE3V2,
    MODEL.JUGGERNAUT_XL_7,
    MODEL.JUGGERNAUT_XL_9,
    MODEL.LORA,
    MODEL.SDXL
  ];

  useEffect(() => {
    if (predict) {
      console.log("Predictions started:", predict);
      textToImage(prompt);
    }
    
  }, [predict]);

  // useEffect(() => {
  //   console.log("context state update", state);
  // }, [state]);


  useEffect(() => {
    if (loading) return isLoading(false);
  }, [predict, predictions]);

  const textToImage = async (prompt, event) => {
    // event.preventDefault();

    // setPredictions(null);
    // if (state.predictions !== null) dispatch({ type: 'set predictions', value: null });
    // dispatch({ type: 'set predictions', value: null });
    dispatch({ type: 'reset' });
    
    isLoading(true);
    dispatch({ type: 'loading', value: true });
    
    // setPredict(true);
    dispatch({ type: 'set predict', value: true });

    let images = [];

    const pushResult = (result, prompt, model) => {
      images.push({
        output: result,
        input: prompt,
        model: model,
        id: generateToken(16),
        success: true,
      });
      console.log("push result »");
      dispatch({ type: 'set predictions', value: images });
      // setPredictions(images);
    };

    const predictError = (prompt, model, error) => {
      images.push({
        input: prompt,
        model: model,
        // status: "failed",
        success: false,
        message: error,
      });
      console.error("❌ error:", error);
      dispatch({ type: 'set predictions', value: images });
      // setPredictions(images);
    };

    for (const model of queryChain) {
      /*
      await HF(model, prompt)
        .then((image) => {
          // pushResult(image, prompt, model);
          const acceptedFormat = image.includes("data:image/jpeg;base64");
          const message = `unsupported format: ${image}`;
          if (acceptedFormat) {
            pushResult(image, prompt, model);
          } else {
            predictError(prompt, model, message);
          }
        })
        .catch((error) => {
          predictError(prompt, model, error);
        });
      */
      const hf_token = process.env.HUGGING_FACE_API_TOKEN;

      
      console.info(model.replace('https://api-inference.huggingface.co/models/', '').split('/')[1]);
      console.log(prompt);
    
      if (!hf_token) {
        throw new Error("HUGGING_FACE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it.");
      }
    
      async function query(data) {
          const response = await fetch(model || MODEL.SDXL, {
            headers: {
              Authorization: `Bearer ${hf_token}`,
            },
            method: "POST",
            body: JSON.stringify(data),
          });
          const result = await response.blob();
          // return result;
      
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
        
            reader.onend = reject;
            reader.onabort = reject;
      
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(result);
          });
        }


        query({ inputs: prompt }).then((response) => {
          // return response; 
          console.log(response, typeof response)
          pushResult(response, prompt, model);
        });
        
      // await HF_OLD(model, prompt)
      //   .then((response) => {
      //     console.log("dupska czorne", JSON.stringify(response));
      //     console.log("dupska czorne", response);
      //     console.log("dupska czorne", JSON.stringify(response));
      //     // return response;
      //   });

    }
  };

  const handleChange = (event) => {
    // setPrompt(event.target.value);
    setValue(event.target.value);
  };

  const changePrompt = (value) => {
    // setPrompt(value);
    setValue(value);
    setTimeout(() => textToImage(value), 100);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("enter");
      setTimeout(() => textToImage(value), 100);
    }
  };

  return (
    <>
      <Header appName="SPYBOX Create" />
      <LeadSpace />
      <Main wrapper>
        {/* <BumperSection 
          tile 
          // section
          block="center"
          heading={
            <div className="Leadspace-container column">
              <p className="responsive-paragraph-03 monoblock">Input your text and click button to see some magic happen!</p>
              <div className="responsive-paragraph-03 monoblock ">↓</div>
            </div>
          }
        >
           <div className="Leadspace-container column">
              <p className="responsive-paragraph-03 monoblock">Input your text and click button to see some magic happen!</p>
              <div className="responsive-paragraph-03 monoblock ">↓</div>
            </div>

        </BumperSection> */}

        <QueryInput
            // onChange={handleChange}
            // onKeyDown={handleKeyDown}
            // value={value}
            placeholder={prompt}
            onClick={() => textToImage(value)}
            loading={loading}
          />
          <PromptsTags />


          <SamplePredictions loading={loading} changePrompt={changePrompt} text/>
        <section>
            <>
              {loading && <Overlay />}
              
              {/* <Predictions loading={loading} predictions={predictions} /> */}
              <PredictGallery loading={loading} predictions={predictions} predict={predict} results={6}/>
              <Console loading={loading} predictions={predictions} />
            </>
          </section>
      </Main>
      {predictions && (
        <BumperSection
          asLink
          // section
          // block="end"
          // block="nearest"
          href="#top"
          label="Back to top"
          wrapper
        >
          <h4 className="label responsive-paragraph-02 monoblock">Back to top</h4>
        </BumperSection>
      )}
      <Footer appName="Spybox Create" />
    </>
  );
};



const LeadSpace = () => (
  <section>
    <Wrapper className="Leadspace">
      <div className="Leadspace-container">
        <h1 className="responsive-heading-06 monoblock">Hello to Create</h1>
        <p className="responsive-paragraph-03 monoblock">Input your text and click button to see some magic happen!</p>
        <div className="responsive-paragraph-03 monoblock ">↓</div>
      </div>
    </Wrapper>
    {/* <BumperSection 
      asLink
      // href="#top"
      block="end"
      kind="ghost"
      label="Back to top"
      enabledSize='50vh'
      hoveredSize='40vh'
      wrapper
    >
      <div className="Leadspace-container column">
        <h1 className="responsive-heading-06 monoblock">Hello to Create</h1>
        <p className="responsive-paragraph-03 monoblock">Input your text and click button to see some magic happen!</p>
        <div className="responsive-paragraph-03 monoblock ">↓</div>
      </div>
    </BumperSection> */}
  </section>
);



const SamplePredictions = ({ loading, changePrompt }) => {
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
    root: "SamplePredictions",
    text: "LeadText",
    list: "TagList",
    item: ["TagItem", loading ? "disabled" : ""].join(" ").trim(),
    tag: "tag",
  };
  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        <li className={classes.text}>
          <span>Or try one of these sample prompts:</span>
        </li>
        {prompts.map((sample, i) => (
          <li key={i} className={classes.item}>
            <a className={classes.tag} onClick={() => {
              changePrompt(sample)
            }}>
              {sample} ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


const Overlay = () => <div className="ContentOverlay" />;


 


