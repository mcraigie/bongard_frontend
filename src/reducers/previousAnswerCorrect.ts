import { ActionTypes, TypeKeys } from  "../action_types";

function previousAnswerCorrect(state: boolean | null = null, action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.RESPOND:
      return action.problem.correctAnswerId === action.answer;
    default:
      return state;
  }
}

export default previousAnswerCorrect;
