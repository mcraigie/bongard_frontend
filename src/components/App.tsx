import * as React from "react";
import { Switch, Route, RouteComponentProps } from "react-router";

import { Home } from "./Home";
import { Game } from "./Game";
import { NoMatch } from "./NoMatch";

import "./App.css";

export interface AppProps extends RouteComponentProps<{}> {
  user: User;
  currentProblem: Problem;
  loading: boolean;
  displayInstructions: boolean;
  setCurrentProblem: (problem: Problem) => void;
  setError: (error: Error) => void;
  respond: (problem: Problem, answer: string) => void;
  push: (url: string) => void;
  toggleDisplayingInstructions: () => void;
}

export const App = (props: AppProps) => {
  const {
    user,
    currentProblem,
    loading,
    displayInstructions,
    setCurrentProblem,
    setError,
    respond,
    push,
    toggleDisplayingInstructions,
  } = props;

  // could make this null if current problem not available
  function respondAndPush(answer: string) {
    respond(currentProblem, answer);
    push(`/problem/${user.nextProblemId}`);
  }

  return (
    <div className="App">
      <Switch>
        <Route
          exact={true}
          path="/"
          render={routingProps => <Home {...routingProps} push={push} />}
        />

        <Route
          path="/problem/:problemId"
          render={routingProps => (
            <Game
              {...routingProps}
              currentProblem={currentProblem}
              loading={loading}
              setCurrentProblem={setCurrentProblem}
              setError={setError}
              handleAnswer={respondAndPush}
              user={user}
              toggleDisplayingInstructions={toggleDisplayingInstructions}
              displayInstructions={displayInstructions}
            />
          )}
        />

        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
