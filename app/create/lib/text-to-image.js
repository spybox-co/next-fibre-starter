import * as MODEL from "./ai-models";

const hf_token = process.env.HUGGING_FACE_API_TOKEN;

export const HF = async (api, prompt, accessToken) => {
  console.log(api.replace('https://api-inference.huggingface.co/models/', ''));
  console.log(prompt);

  const inputData = {
    inputs: prompt,
    options: {
      wait_for_model: true,
    },
  };

  if (!hf_token) {
    throw new Error("HUGGING_FACE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it.");
  }

  const response = await fetch(api || MODEL.SDXL, {
    headers: {
      Authorization: `Bearer ${accessToken || hf_token}`,
      // Accept: "image/jpeg",
      // "Content-Type": "image/jpeg",
    },
    method: "POST",
    body: JSON.stringify(inputData),
    responseType: "arraybuffer",
  });
  
  const result = await response.blob();
  // return result;

  // @ See solution
  // https://www.tabnine.com/code/javascript/functions/builtins/FileReader/result

  // const image = new Promise((resolve, reject) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onend = reject;
    reader.onabort = reject;

    /* 
        @MODE
        1. Option returns all results
    */

    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(result);

    /* 
        @MODE
        2. Option focused only success status code, kills invalid output nad doesn't push the result
    */

    // reader.readAsDataURL(result);
    // reader.onloadend = function () {
    //   const image = reader.result.includes("data:image/jpeg;base64");
    //   if (image) resolve(reader.result);
    // };

    /* 
        @MODE
        3. Option detects various types of base 64 
        
        Status - NOT WORKING!
    */

    // reader.readAsDataURL(result);
    // reader.onloadend = function () {
    //   const base64data = reader.result.split(",").pop();
    //   resolve(`data:image/jpeg;base64,${base64data}`); // or return base64data);
    // };
  });
};


export function readBlob(blob) {
  return new Promise((resolve, reject) => {
   const reader = new FileReader();
 
   reader.onend = reject;
   reader.onabort = reject;
   reader.onload = () => resolve(reader.result);
   reader.readAsDataURL(new Blob([blob], { type: blob.type }));
  });
 }
/*
  HUGGING FACE Interface API

  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/vendor/vendor-ai-model-name",
      {
        headers: { Authorization: "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  }
  query({"inputs": "Astronaut riding a horse"}).then((response) => {
    // Use image
  });
*/






export const HF_OLD = async (api, prompt, accessToken) => {
  console.log(api.replace('https://api-inference.huggingface.co/models/', '').split('/')[1]);
  console.log(prompt);

  if (!hf_token) {
    throw new Error("HUGGING_FACE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it.");
  }

  async function query(data) {
    const response = await fetch(api || MODEL.SDXL, {
      headers: {
        Authorization: `Bearer ${accessToken || hf_token}`,
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
    return response; 
    // console.log(response, typeof response)
  });
};
