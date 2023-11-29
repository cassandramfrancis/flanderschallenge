export interface GlobalState {
  loggedIn: boolean;  
};

export interface GlobalStateAction {
  type: 'set_loggedIn';
  data: unknown;
};

export type GlobalStateReducer = (prevState: GlobalState, action: GlobalStateAction) => GlobalState | undefined;