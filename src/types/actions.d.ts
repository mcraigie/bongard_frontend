interface ProblemAction {
  type: "SET_PROBLEM";
  problem: Problem;
}

interface ResponseAction {
  type: "RESPOND";
  problem: Problem;
  answer: string;
}

interface ToggleAction {
  type: "TOGGLE_INSTRUCTIONS";
}

interface LocationAction {
  type: "@@router/LOCATION_CHANGE";
}

type ActionTypes = ProblemAction | ResponseAction | ToggleAction | LocationAction;
