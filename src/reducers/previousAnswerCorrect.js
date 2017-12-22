function previousAnswerCorrect(state = null, action) {
  switch (action.type) {
    case 'RESPOND': return action.problem.correctAnswerId === action.answer;
    default: return state;
  }
}

export default previousAnswerCorrect;
