import { Action } from "redux";

function currentProblem(state = null, action: Action) {
  switch (action.type) {
    case "SET_CURRENT_PROBLEM":
      return { ...action.problem };
    case "SET_ERROR":
      return null;
    case "RESPOND":
      return null;
    default:
      return state;
  }
}

export default currentProblem;
