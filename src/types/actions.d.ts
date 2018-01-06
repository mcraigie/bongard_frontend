interface FetchProblemRequest {
  type: "FETCH_PROBLEM_REQUEST";
}

interface FetchProblemFailure {
  type: "FETCH_PROBLEM_FAILURE";
  errorMessage: string;
}

interface FetchProblemSuccess {
  type: "FETCH_PROBLEM_SUCCESS";
  response: Problem;
}

interface FetchUserRequest {
  type: "FETCH_USER_REQUEST";
}

interface FetchUserFailure {
  type: "FETCH_USER_FAILURE";
  errorMessage: string;
}

interface FetchUserSuccess {
  type: "FETCH_USER_SUCCESS";
  response: User;
}

interface BeginResponse {
  type: "BEGIN_RESPONSE";
}

interface EndResponse {
  type: "END_RESPONSE";
}

interface ToggleInstructions {
  type: "TOGGLE_INSTRUCTIONS";
}

interface LocationAction {
  type: "@@router/LOCATION_CHANGE";
}

type FetchProblem = FetchProblemRequest | FetchProblemFailure | FetchProblemSuccess;

type FetchUser = FetchUserRequest | FetchUserFailure | FetchUserSuccess;

type Respond = BeginResponse | EndResponse;

type Actions = FetchProblem | FetchUser | Respond | ToggleInstructions | LocationAction;
