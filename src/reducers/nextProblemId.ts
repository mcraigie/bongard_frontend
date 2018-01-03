import { ActionTypes, TypeKeys } from  "../action_types";

function nextProblemId(state: string = "", action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.SET_PROBLEM:
      return `${action.problem.nextProblemId}`;
    default:
      return state;
  }
}

export default nextProblemId;
