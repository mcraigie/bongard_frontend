export default function problem(state: Problem | null = null, action: Actions) {
  switch (action.type) {
    case "FETCH_PROBLEM_REQUEST":
      return null;
    case "FETCH_PROBLEM_SUCCESS":
      return { ...action.response };
    default:
      return state;
  }
}
