import { uuidv4 } from "../utils";

const user = (
  state: User = {
    id: uuidv4(),
    bestStreak: 0,
    currentStreak: 0,
    nextProblemId: "someDefaultValue"
  },
  action: Actions) => {
    switch (action.type) {
      default:
        return state;
    }
};

export default user;