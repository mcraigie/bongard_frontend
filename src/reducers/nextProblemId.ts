import { ActionTypes, TypeKeys } from  "../types/action_types";

function nextProblemId(state = "", action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.SET_PROBLEM:
      return `${action.problem.nextProblemId}`;
    default:
      return state;
  }
}

export default nextProblemId;
