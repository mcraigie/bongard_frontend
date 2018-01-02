import { ActionTypes, TypeKeys } from  "../types/action_types";

function previousAnswerCorrect(state = null, action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.RESPOND:
      return action.problem.correctAnswerId === action.answer;
    default:
      return state;
  }
}

export default previousAnswerCorrect;
