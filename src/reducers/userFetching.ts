export default function userFetching(state: boolean = false, action: Actions) {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return true;
    case "FETCH_USER_FAILURE":
      return false;
    case "FETCH_USER_SUCCESS":
      return false;
    default:
      return state;
  }
}
