import { uuidv4 } from "../utils";

function user(state: User = { id: uuidv4(), bestStreak: 0, currentStreak: 0 }, action: ActionTypes) {
  switch (action.type) {
    default:
      return state;
  }
}

export default user;
