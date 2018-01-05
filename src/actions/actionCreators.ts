export function setCurrentProblem(problem: Problem): ProblemAction {
  return {
    type: TypeKeys.SET_PROBLEM,
    problem,
  };
}

export function respond(problem: Problem, answer: string): ResponseAction {
  return {
    type: TypeKeys.RESPOND,
    problem,
    answer,
  };
}

export function toggleDisplayingInstructions(): ToggleAction {
  return {
    type: TypeKeys.TOGGLE_INSTRUCTIONS,
  };
}
