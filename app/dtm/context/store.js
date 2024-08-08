'use client';

import { createContext, useReducer, useEffect } from 'react';

/*
    @SEE ALSO: 
    Pattern for reducer and useStateValue hook

    https://stackoverflow.com/questions/69532197/restore-previous-state-in-context-api?noredirect=1&lq=1
*/


const initialState = {
  // header: {
  //   active: false,
  //   global: true
  // },
  headerIsActive: true
}


const store = createContext(initialState);
const { Provider } = store;



const StateProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      // Samples
      case 'sample action #1':
        const newState = { ...state, valueState: { ...vauleState, someVariable: action.value } }// do something with the action
        return newState;
      case 'sample action #2':
        return { ...state, valueState: { ...vauleState, someVariable: action.value }};

      case 'set header global':
        // return {...state, header: { ...state.header, global: true }};
        return {...state, headerIsActive: false };

      case 'set header active':
        // return {...state, header: { ...state.header, global: false }};
        return {...state, headerIsActive: true };

    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };