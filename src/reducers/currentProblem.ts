import { ActionTypes, TypeKeys } from  "../action_types";

function currentProblem(state = null, action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.SET_PROBLEM:
      return { ...action.problem };
    case TypeKeys.SET_ERROR:
      return null;
    case TypeKeys.RESPOND:
      return null;
    default:
      return state;
  }
}

export default currentProblem;
