import { uuidv4 } from "../utils";

export default function user(state: User = { id: uuidv4(), bestStreak: 0, currentStreak: 0 }, action: Actions) {
  switch (action.type) {
    default:
      return state;
  }
}
