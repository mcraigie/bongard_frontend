function displayInstructions(state = true, action) {
  switch (action.type) {
    case 'TOGGLE_INSTRUCTIONS': return !state;
    case 'RESPOND': return false;
    default: return state;
  }
}

export default displayInstructions;
