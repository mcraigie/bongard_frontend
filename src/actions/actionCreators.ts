export function fetchProblemRequest(): FetchProblemRequest {
  return {
    type: "FETCH_PROBLEM_REQUEST",
  };
}

export function fetchProblemFailure(errorMessage: string): FetchProblemFailure {
  return {
    type: "FETCH_PROBLEM_FAILURE",
    errorMessage,
  };
}

export function fetchProblemSuccess(response: Problem): FetchProblemSuccess {
  return {
    type: "FETCH_PROBLEM_SUCCESS",
    response,
  };
}

export function fetchUserRequest(): FetchUserRequest {
  return {
    type: "FETCH_USER_REQUEST",
  };
}

export function fetchUserFailure(errorMessage: string): FetchUserFailure {
  return {
    type: "FETCH_USER_FAILURE",
    errorMessage,
  };
}

export function fetchUserSuccess(response: User): FetchUserSuccess {
  return {
    type: "FETCH_USER_SUCCESS",
    response,
  };
}

// export function respond(problem: Problem, diagramId: string): Respond {
//   return {
//     type: "RESPOND",
//     problem,
//     diagramId,
//   };
// }

export function toggleDisplayingInstructions(): ToggleAction {
  return {
    type: "TOGGLE_INSTRUCTIONS",
  };
}
