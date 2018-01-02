import { Action } from "redux";

function displayInstructions(state = true, action: Action) {
  switch (action.type) {
    case "TOGGLE_INSTRUCTIONS":
      return !state;
    case "RESPOND":
      return false;
    default:
      return state;
  }
}

export default displayInstructions;
