function loadingProblem(state: boolean = true, action: Actions) {
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
