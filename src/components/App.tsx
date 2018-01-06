import * as React from "react";
import { Switch, Route, RouteComponentProps } from "react-router";

import { Home } from "./Home";
import { Game } from "./Game";
import { NoMatch } from "./NoMatch";

import "./App.css";

export interface AppProps extends RouteComponentProps<{ problemId: string }> {
  user: User;
  problem: Problem | null;
  problemFetching: boolean;
  problemFetchingFailure: string | null;
  problemValid: boolean;
  displayInstructions: boolean;
  fetchProblemRequest: () => void;
  fetchProblemFailure: (errorMessage: string) => void;
  fetchProblemSuccess: (response: Problem) => void;
  push: (url: string) => void;
  toggleDisplayingInstructions: () => void;
}

export class App extends React.Component<AppProps> {
  componentDidMount() {
    const { problemValid } = this.props;

    if (!problemValid) {
      this.blah();
    }
  }

  componentDidUpdate() {
    const { problemValid } = this.props;

    if (!problemValid) {
      this.blah();
    }
  }

  blah = () => {
    const { fetchProblemRequest, fetchProblemFailure, fetchProblemSuccess, match } = this.props;

    fetchProblemRequest();

    fetch(`/${match.params.problemId}.json`)
      .then(r => r.json())
      .then(response => fetchProblemSuccess(response), error => fetchProblemFailure(error.message));
  };

  render() {
    const { user, problem, displayInstructions, push, toggleDisplayingInstructions } = this.props;

    const respondAndPush = (f: string) => null;

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
                problem={problem}
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
  }
}
