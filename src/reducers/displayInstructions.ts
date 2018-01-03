import { ActionTypes, TypeKeys } from  "../action_types";

function displayInstructions(state: boolean = true, action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.TOGGLE:
      return !state;
    case TypeKeys.RESPOND:
      return false;
    default:
      return state;
  }
}

export default displayInstructions;
