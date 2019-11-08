import React, { useReducer, useContext, useEffect, Dispatch } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { reducer, initialState, State, ActionTypes } from './reducer';
import { getUser } from './operations.graphql';

const AppContext = React.createContext<{
  state: State;
  dispatch: Dispatch<ActionTypes>;
}>({ state: initialState, dispatch: () => {} });

export const AppContextProvider: React.FC = ({ children, ...restProps }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data } = useQuery(getUser, {
    skip: window.location.pathname === '/callback'
  });

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_USER', payload: data.user });
    }
  }, [data]);

  return (
    <AppContext.Provider value={{ state, dispatch }} {...restProps}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }

  return context;
}
