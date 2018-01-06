export default function responding(state: boolean = false, action: Actions) {
  switch (action.type) {
    case "BEGIN_RESPONSE":
      return true;
    case "END_RESPONSE":
      return false;
    default:
      return state;
  }
}
