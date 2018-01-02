export function setCurrentProblem(problem: Problem) {
  return {
    type: "SET_CURRENT_PROBLEM",
    problem,
  };
}

export function setError(error: Error) {
  return {
    type: "SET_ERROR",
    error,
  };
}

export function respond(problem: Problem, answer: Answer) {
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
