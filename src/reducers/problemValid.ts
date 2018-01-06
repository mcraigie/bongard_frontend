export default function problemValid(state: boolean = false, action: Actions) {
  switch (action.type) {
    case "@@router/LOCATION_CHANGE":
      return false;
    case "FETCH_PROBLEM_FAILURE":
      return true;
    case "FETCH_PROBLEM_SUCCESS":
      return true;
    default:
      return state;
  }
}
