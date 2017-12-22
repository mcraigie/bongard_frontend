function score(state = 0, action) {
  switch (action.type) {
    case 'RESPOND':
      return state + (action.problem.correctAnswerId === action.answer ? 100 : 0);
    default: return state;
  }
}

export default score;
