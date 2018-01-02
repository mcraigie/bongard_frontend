import { ActionTypes, TypeKeys } from  "../types/action_types";

function error(state = null, action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.SET_ERROR:
      return { ...action.error };
    case TypeKeys.SET_PROBLEM:
      return null;
    case TypeKeys.RESPOND:
      return null;
    default:
      return state;
  }
}

export default error;
