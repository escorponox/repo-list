import { UserFragment } from 'Common/types/graphql-types';

export interface State {
  user: UserFragment | undefined;
}

interface SetUserAction {
  type: 'SET_USER';
  payload?: UserFragment;
}

export type ActionTypes = SetUserAction;

export const initialState: State = {
  user: undefined
};

export const reducer = (state: State, action: ActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_USER': {
      return {
        user: payload
      };
    }
    default:
      return state;
  }
};
