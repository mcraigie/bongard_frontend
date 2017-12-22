function streaks(state = { best: 0, current: 0 }, action) {
  switch (action.type) {
    case 'RESPOND': {
      let { best, current } = state;

      if (action.problem.correctAnswerId === action.answer) {
        current += 1;
      } else {
        current = 0;
      }

      if (current > best) {
        best = current;
      }

      return { best, current };
    }

    default: return state;
  }
}

export default streaks;