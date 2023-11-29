import { Reducer, useReducer, createContext, useContext, useEffect } from "react";
import { GlobalState, GlobalStateReducer, GlobalStateAction } from "./types";
import { setLoginReducer } from "./reducers/setLogin";

export const defaultStore: GlobalState = {
  loggedIn: false
};

export const reducers: GlobalStateReducer[] = [setLoginReducer];

export const globalStoreContext = createContext(defaultStore);


/**
 * Super simple reducer for super simple global store
 */
const reducer: Reducer<GlobalState, GlobalStateAction> = (state, action) => {
  let returnState: GlobalState | undefined = undefined;

  for (const r of reducers) {
    const reducerResult = r(state, action);
    if (reducerResult !== undefined) {
      returnState = reducerResult;
      break;
    }
  }

  if (!returnState) {
    throw Error('Unknown action type.');
  }
  
  return returnState;
};

/** Super simple global store */
export const useStore = () => {
  const context = useContext(globalStoreContext);
  const [state, dispatch] = useReducer(reducer, context);

  useEffect(() => {
    Object.assign(context, state);
  }, [context, state]);

  return {
    state, dispatch
  };
};