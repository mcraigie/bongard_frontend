export function setCurrentProblem(problem: Problem): ProblemAction {
  return {
    type: "SET_PROBLEM",
    problem,
  };
}

export function respond(problem: Problem, answer: string): ResponseAction {
  return {
    type: "RESPOND",
    problem,
    answer,
  };
}

export function toggleDisplayingInstructions(): ToggleAction {
  return {
    type: "TOGGLE_INSTRUCTIONS",
  };
}
