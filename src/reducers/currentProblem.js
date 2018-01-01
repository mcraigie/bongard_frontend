function currentProblem(state = null, action) {
  switch (action.type) {
    case 'SET_CURRENT_PROBLEM': return { ...action.problem };
    case 'SET_ERROR': return null;
    case 'RESPOND': return null;
    // case '@@router/LOCATION_CHANGE': return null;
    default: return state;
  }
}

export default currentProblem;
