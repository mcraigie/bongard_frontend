function loadingProblem(state: boolean = true, action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.SET_PROBLEM:
      return false;
    case TypeKeys.SET_ERROR:
      return false;
    case TypeKeys.RESPOND:
      return true;
    case TypeKeys.LOCATION_CHANGE:
      return true;
    default:
      return state;
  }
}

export default loadingProblem;
