import { GlobalStateReducer } from "../types";

export const setLoginReducer: GlobalStateReducer = (state, action) => {
  if (action.type !== 'set_loggedIn') {
    return;
  }

  if (typeof action.data !== 'boolean') {
    throw new Error('Invalid action.data for loggedIn - must be boolean');
  }

  return {
    ...state,
    loggedIn: action.data,
  };
};