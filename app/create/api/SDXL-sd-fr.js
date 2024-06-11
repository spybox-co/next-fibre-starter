import { client } from "@gradio/client";

const API_Endpoint = {
  fast_sdxl:
    "https://openskyml-fast-sdxl-stable-diffusion-xl.hf.space/--replicas/545b5tw7n/",
  lora_sdxl: "",
};

const textToImage = async () => {
  // TODO: try, catch
  try {
    const app = await client(API_Endpoint.fast_sdxl);

    const result = await app.predict(0, [
      prompt, // string  in 'Prompt' Textbox component
      "", // string  in 'Negative Prompt' Textbox component ie "Howdy!"
      25, // number (numeric value between 1 and 30) in 'Sampling Steps' Slider component
      7, // number (numeric value between 1 and 20) in 'CFG Scale' Slider component
      1024, // number (numeric value between 1024 and 1024) in '↔️ Width' Slider component
      1024, // number (numeric value between 1024 and 1024) in '↕️ Height' Slider component
      -1, // number  in 'Seed' Number component
    ]);
    // console.log("image data", result.data);
    console.log(result);

    const imageObject = {
      data: result.data[0],
      endpoint: result.endpoint,
      fn_index: result.fn_index,
      id: generateToken(16),
      time: `${result.time.getFullYear()}-${
        result.time.getMonth() + 1
      }-${result.time.getDate()}`,
      prompt: prompt,
      type: result.type,
    };
    // console.log(imageObject);
    //   setImage(imageObject);
  } catch (error) {
    console.error(error);
  }
};
