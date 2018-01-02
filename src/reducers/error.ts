import { Action } from "redux";

function error(state = null, action: Action) {
  switch (action.type) {
    case "SET_ERROR":
      return { ...action.error };
    case "SET_CURRENT_PROBLEM":
      return null;
    case "RESPOND":
      return null;
    default:
      return state;
  }
}

export default error;
