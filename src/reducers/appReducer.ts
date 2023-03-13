import { AppAction, AppState } from "../models/context";

export const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "THEME_TOGGLE":
      return { ...state, lightMode: !state.lightMode };
    default:
      return state;
  }
};
