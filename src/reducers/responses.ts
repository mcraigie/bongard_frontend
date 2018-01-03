import { ActionTypes, TypeKeys } from  "../action_types";

function responses(state: Array<Answer> = [], action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.RESPOND: {
      const r = state.slice();

      r.push({
        problemId: action.problem.id,
        answerId: action.answer,
      });

      return r;
    }
    default:
      return state;
  }
}

export default responses;
