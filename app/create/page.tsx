
'use client';

// import Replicate from "replicate";
import { useState, useEffect, useCallback } from "react";


// import { defaultQuery, predicts } from './utils/defaultQuery';
import { generateToken } from './lib/func';
import { HF } from './lib/text-to-image';
import * as MODEL from './lib/ai-models';

import { QueryInput } from './components/QueryInput';
import { PredictImage } from './components/PredictImage';
import { PredictGallery } from './components/PredictGallery';
import { Console } from './components/Console';


import { Header, Main, Footer, Wrapper } from '@/components';

import { BumperSection } from '@/common-ui';



import './styles.scss';

export default function Home() {
  const [loading, isLoading] = useState(false);
  // const [predict, setPredict] = useState(null); //predicts.wizmodel
  const [prompt, setPrompt] = useState('a cute cat');
  const [value, setValue] = useState('');

  const [predict, setPredict] = useState(false); //set start gallery

  const [predictions, setPredictions] = useState(null); //predicts.wizmodel

  const [image, setImage] = useState(null);

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
    console.log("Predictions started:", predict);
  }, [predict]);

  useEffect(() => {
    if (loading) return isLoading(false);
  }, [predict, predictions]);

  const textToImage = async (prompt) => {
    setPredictions(null);
    isLoading(true);
    setPredict(true);

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
      setPredictions(images);
    };

    const predictError = (prompt, model, error) => {
      images.push({
        input: prompt,
        model: model,
        success: false,
        message: error,
      });
      console.error("❌ error:", error);
      setPredictions(images);
    };

    for (const model of queryChain) {
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
    }
  };

  const handleChange = (event) => {
    setPrompt(event.target.value);
    setValue(event.target.value);
  };
  const changePrompt = (value) => {
    setPrompt(value);
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
        <BumperSection 
          tile 
          block="nearest"
          heading={
            <div className="Leadspace-container column">
              <p className="responsive-paragraph-03 monoblock">Input your text and click button to see some magic happen!</p>
              <div className="responsive-paragraph-03 monoblock ">↓</div>
            </div>
          }
        >
          <QueryInput
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={value}
            placeholder={prompt}
            onClick={() => textToImage(value)}
            loading={loading}
          />

        


          <section>
            <>
              <SamplePredictions loading={loading} changePrompt={changePrompt} />
              {/* <Predictions loading={loading} predictions={predictions} /> */}
              <PredictGallery loading={loading} predictions={predictions} predict={predict} results={6}/>
              <Console loading={loading} predictions={predictions} />
            </>
          </section>
        </BumperSection>
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
        {/* <p className="responsive-paragraph-03 monoblock">Input your text and click button to see some magic happen!</p>
        <div className="responsive-paragraph-03 monoblock ">↓</div> */}
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

const Overlay = () => <div className="ContentOverlay" />;

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
            <a className={classes.tag} onClick={() => changePrompt(sample)}>
              {sample} ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};




export const Bin = () => (
  <div className="Gallery PredictsSet">
    {loading && <Overlay />}

    <ul>
      {predict?.output && (
        <li>
          <PredictImage
            source={`data:image/png;base64,${predict.output.images[0]}`}
            altText="Generated image with prompt"
            downloadData={`created image  - ${predict.id} - ${predict.input.prompt}`}
          />
          {/* <code>
        <p>Image type: {JSON.stringify(image.type)}</p>
        <p>Prompt: {JSON.stringify(image.prompt)}</p>
        <p>ID: {JSON.stringify(image.id)}</p>
        <p>Time of creation: {JSON.stringify(image.time)}</p>
        <p>Endpoint: {JSON.stringify(image.endpoint)}</p>
        <p>Time of creation: {JSON.stringify(image.time)}</p>
        <p>FN Index: {JSON.stringify(image.fn_index)}</p>
      </code> */}
        </li>
      )}
      {image && (
        <li>
          <PredictImage
            source={`${image}`}
            altText="Generated image with prompt"
            downloadData={`created image  - ${generateToken(
              16,
            )} - ${prompt}`}
          />
        </li>
      )}
    </ul>
  </div>
)



 


