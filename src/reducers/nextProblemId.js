function nextProblemId(state = '', action) {
  switch (action.type) {
    case 'SET_CURRENT_PROBLEM': return `${action.problem.nextProblemId}`;
    default: return state;
  }
}

export default nextProblemId;
