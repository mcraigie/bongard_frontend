function displayInstructions(state: boolean = true, action: Actions) {
  switch (action.type) {
    case "TOGGLE_INSTRUCTIONS":
      return !state;
    case "RESPOND":
      return false;
    default:
      return state;
  }
}

export default displayInstructions;
