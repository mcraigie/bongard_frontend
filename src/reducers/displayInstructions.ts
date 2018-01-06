export default function displayInstructions(state: boolean = true, action: Actions) {
  switch (action.type) {
    case "TOGGLE_INSTRUCTIONS":
      return !state;
    default:
      return state;
  }
}
