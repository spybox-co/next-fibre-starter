'use client';

import { createContext, useReducer } from 'react';

// @See: Toptal example
// https://www.toptal.com/react/react-context-api

const initialState = {
  predictions: null,
  predict: false,
  prompt: '',
  loading: false,
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      // Samples
      case 'sample action #1':
        const newState = {
          ...state,
          sampleState: { ...state, someParameter: action.value }
        }; // do something with the action
        return newState;

      case 'loading':
        return {
          ...state,
          loading: action.value
        };

      case 'reset':
        return {
          predictions: null,
          predict: false,
          prompt: '',
          loading: false,
        };

      case 'set predict':
        return {
          ...state,
          predict: action.value
        };


      case 'start predict':
        return {
          ...state,
          predict: true
        };


      case 'set prompt':
        return {
          ...state,
          prompt: action.value
        };

      case 'change prompt':
        return {
          predictions: null,
          predict: true,
          prompt: action.value,
          loading: true,
        };



      case 'set predictions':
        const updateSetPredictions = {
          ...state,
          predictions: action.value
        };
        return updateSetPredictions;

      default:
        console.warn('No dispatchEvent set!');
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };

// @See: Nextjs Context Provider with useMemo 
// https://medium.com/geekculture/how-to-use-context-usereducer-and-localstorage-in-next-js-cc7bc925d3f2
// and
// https://medium.com/@seb_5882/nextjs-13-4-using-context-api-in-app-router-a1198a61c5c8

// export function useAppContext() {
//   return useContext(store);
// }
