import { ActionTypes, TypeKeys } from  "../types/action_types";

function streaks(state = { best: 0, current: 0 }, action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.RESPOND: {
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

    default:
      return state;
  }
}

export default streaks;
