declare enum TypeKeys {
  SET_PROBLEM = "SET_PROBLEM",
  RESPOND = "RESPOND",
  TOGGLE_INSTRUCTIONS = "TOGGLE_INSTRUCTIONS",
  LOCATION_CHANGE = "@@router/LOCATION_CHANGE",
  OTHER_ACTION = "__any_other_action_type__",
}

interface ProblemAction {
  type: TypeKeys.SET_PROBLEM;
  problem: Problem;
}

interface ResponseAction {
  type: TypeKeys.RESPOND;
  problem: Problem;
  answer: string;
}

interface ToggleAction {
  type: TypeKeys.TOGGLE_INSTRUCTIONS;
}

interface LocationAction {
  type: TypeKeys.LOCATION_CHANGE;
}

interface OtherAction {
  type: TypeKeys.OTHER_ACTION;
}

type ActionTypes = ProblemAction | ResponseAction | ToggleAction | LocationAction | OtherAction;
