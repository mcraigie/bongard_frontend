export default function userFetchingFailure(state: string | null = null, action: Actions) {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return null;
    case "FETCH_USER_FAILURE":
      return action.errorMessage.slice(0);
    default:
      return state;
  }
}
