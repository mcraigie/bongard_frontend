export default function problemFetchingFailure(state: string | null = null, action: Actions) {
  switch (action.type) {
    case "FETCH_PROBLEM_REQUEST":
      return null;
    case "FETCH_PROBLEM_FAILURE":
      return action.errorMessage.slice(0);
    default:
      return state;
  }
}
