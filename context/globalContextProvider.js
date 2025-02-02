import React, { createContext, useReducer } from 'react';

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'PLAY_EPISODE':
      return { ...state, currentAudio: action.payload };
    case 'LIST_EPISODES':
      return { ...state, episodes: action.payload };
    case 'SET_IS_PLAYING':
      return { ...state, isPlaying: action.payload };
    case 'SET_AMPLITUDE':
      return { ...state, amplitude: action.payload };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
        isThemed: action.payload.colors !== null,
      };
    case 'SET_INSTAGRAM_LIST':
      return { ...state, instagramList: action.payload };
    case 'SET_INSTAGRAM_NAME':
      return { ...state, instagramName: action.payload };
    default:
      throw new Error();
  }
  return state;
};

const GlobalContextProvider = ({ children }) => {
  const initialState = {
    currentAudio: null,
    episodes: [],
    isPlaying: false,
    amplitude: null,
    theme: null,
    isThemed: null,
    instagramList: [],
    instagramName: null,
  };

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
