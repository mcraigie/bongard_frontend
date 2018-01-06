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

export function beginResponse(): BeginResponse {
  return {
    type: "BEGIN_RESPONSE",
  };
}

export function endResponse(): EndResponse {
  return {
    type: "END_RESPONSE",
  };
}

export function toggleDisplayingInstructions(): ToggleInstructions {
  return {
    type: "TOGGLE_INSTRUCTIONS",
  };
}
