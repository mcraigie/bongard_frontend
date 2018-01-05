function currentProblem(state: Problem | null = null, action: ActionTypes) {
  switch (action.type) {
    case "SET_PROBLEM":
      return { ...action.problem };
    case "RESPOND":
      return null;
    default:
      return state;
  }
}

export default currentProblem;
