export function setCurrentProblem(problem) {
  return {
    type: "SET_CURRENT_PROBLEM",
    problem,
  };
}

export function setError(error) {
  return {
    type: "SET_ERROR",
    error,
  };
}

export function respond(problem, answer) {
  return {
    type: "RESPOND",
    problem,
    answer,
  };
}

export function toggleInstructions() {
  return {
    type: "TOGGLE_INSTRUCTIONS",
  };
}
