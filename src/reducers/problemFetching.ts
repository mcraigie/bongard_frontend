export default function problemFetching(state: boolean = false, action: Actions) {
  switch (action.type) {
    case "FETCH_PROBLEM_REQUEST":
      return true;
    case "FETCH_PROBLEM_FAILURE":
      return false;
    case "FETCH_PROBLEM_SUCCESS":
      return false;
    default:
      return state;
  }
}
