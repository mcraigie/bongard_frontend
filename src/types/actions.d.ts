type SET_PROBLEM = "SET_PROBLEM";
type RESPOND = "RESPOND";
type TOGGLE_INSTRUCTIONS = "TOGGLE_INSTRUCTIONS";
type LOCATION_CHANGE = "@@router/LOCATION_CHANGE";
type OTHER_ACTION = "__any_other_action_type__";

interface ProblemAction {
  type: SET_PROBLEM;
  problem: Problem;
}

interface ResponseAction {
  type: RESPOND;
  problem: Problem;
  answer: string;
}

interface ToggleAction {
  type: TOGGLE_INSTRUCTIONS;
}

interface LocationAction {
  type: LOCATION_CHANGE;
}

interface OtherAction {
  type: OTHER_ACTION;
}

type ActionTypes = ProblemAction | ResponseAction | ToggleAction | LocationAction | OtherAction;
