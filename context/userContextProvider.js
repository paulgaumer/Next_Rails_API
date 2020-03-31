import React, { createContext, useReducer } from 'react';

export const UserStateContext = createContext();
export const UserDispatchContext = createContext();

function reducer(state, action) {
  console.log('HHELLO');
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { user: action.payload };
    default:
      throw new Error();
  }
}

const UserContextProvider = ({ children }) => {
  const initialState = {};

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export default UserContextProvider;
