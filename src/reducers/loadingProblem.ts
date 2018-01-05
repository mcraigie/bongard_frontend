function loadingProblem(state: boolean = true, action: ActionTypes) {
  switch (action.type) {
    case "SET_PROBLEM":
      return false;
    case "RESPOND":
      return true;
    case "@@router/LOCATION_CHANGE":
      return true;
    default:
      return state;
  }
}

export default loadingProblem;
