import { TypeKeys, ErrorAction, ResponseAction, ProblemAction, ToggleAction } from "../action_types";

export function setCurrentProblem(problem: Problem): ProblemAction {
  return {
    type: TypeKeys.SET_PROBLEM,
    problem,
  };
}

export function setError(error: Error): ErrorAction {
  return {
    type: TypeKeys.SET_ERROR,
    error,
  };
}

export function respond(problem: Problem, answer: string): ResponseAction {
  return {
    type: TypeKeys.RESPOND,
    problem,
    answer,
  };
}

export function toggleInstructions(): ToggleAction {
  return {
    type: TypeKeys.TOGGLE,
  };
}
