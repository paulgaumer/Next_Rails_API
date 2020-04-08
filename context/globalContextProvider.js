import React, { createContext, useReducer } from 'react';

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const reducer = (state, action) => {
  // console.log('h');
  switch (action.type) {
    case 'PLAY_MOST_RECENT_EPISODE':
      return { ...state, currentAudio: action.payload };
    default:
      throw new Error();
  }
  return state;
};

const GlobalContextProvider = ({ children }) => {
  const initialState = { currentAudio: null };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
