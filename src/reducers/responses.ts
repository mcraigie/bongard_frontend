import { Action } from "redux";

function responses(state = [], action: Action) {
  switch (action.type) {
    case "RESPOND": {
      const r = state.slice();

      r.push({
        problemId: action.problem.id,
        answer: action.answer,
      });

      return r;
    }
    default:
      return state;
  }
}

export default responses;
