import * as React from "react";
import { Switch, Route } from "react-router";

import { Home } from "./Home";
import { Game } from "./Game";
import { NoMatch } from "./NoMatch";

import "./App.css";

export interface AppProps {
  currentProblem: Problem;
  previousAnswerCorrect: boolean;
  loading: boolean;
  error: Error;
  streaks: Streaks;
  nextProblemId: string;
  displayInstructions: boolean;
  responses: Array<Answer>;
  actions: any;
}

export const App = (props: AppProps) => {
  const {
    currentProblem,
    previousAnswerCorrect,
    loading,
    error,
    streaks,
    nextProblemId,
    displayInstructions,
    responses,
    actions,
  } = props;

  const { setCurrentProblem, setError, respond, push, toggleInstructions } = actions;

  // could make this null if current problem not available
  function respondAndPush(answer: string) {
    if (responses.filter(r => r.problemId === currentProblem.id).length === 0) {
      respond(currentProblem, answer);
    }

    push(`/problem/${nextProblemId}`);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          path="/problem/:problemId"
          render={routingProps => (
            <Game
              {...routingProps}
              currentProblem={currentProblem}
              previousAnswerCorrect={previousAnswerCorrect}
              loading={loading}
              error={error}
              setCurrentProblem={setCurrentProblem}
              setError={setError}
              handleAnswer={respondAndPush}
              streaks={streaks}
              toggleInstructions={toggleInstructions}
              displayInstructions={displayInstructions}
            />
          )}
        />

        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
