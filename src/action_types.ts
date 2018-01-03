export enum TypeKeys {
  SET_PROBLEM = "SET_PROBLEM",
  SET_ERROR = "SET_ERROR",
  RESPOND = "RESPOND",
  TOGGLE = "TOGGLE_INSTRUCTIONS",
  LOCATION_CHANGE = "@@router/LOCATION_CHANGE",
  OTHER_ACTION = "__any_other_action_type__",
}

export interface ProblemAction {
  type: TypeKeys.SET_PROBLEM;
  problem: Problem;
}

export interface ResponseAction {
  type: TypeKeys.RESPOND;
  problem: Problem;
  answer: string;
}

export interface ErrorAction {
  type: TypeKeys.SET_ERROR;
  error: Error;
}

export interface ToggleAction {
  type: TypeKeys.TOGGLE;
}

export interface LocationAction {
  type: TypeKeys.LOCATION_CHANGE;
}

export interface OtherAction {
  type: TypeKeys.OTHER_ACTION;
}

export type ActionTypes =
  | ProblemAction
  | ErrorAction
  | ResponseAction
  | ToggleAction
  | LocationAction
  | OtherAction;
