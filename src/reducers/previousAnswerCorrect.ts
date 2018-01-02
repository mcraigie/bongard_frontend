import { Action } from "redux";

function previousAnswerCorrect(state = null, action: Action) {
  switch (action.type) {
    case "RESPOND":
      return action.problem.correctAnswerId === action.answer;
    default:
      return state;
  }
}

export default previousAnswerCorrect;
