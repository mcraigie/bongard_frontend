import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Game } from "./Game";

import "./App.css";

export interface AppProps extends RouteComponentProps<{ problemId: string }> {
  user: User;
  userFetching: boolean;
  userFetchingFailure: string | null;
  problem: Problem | null;
  problemFetching: boolean;
  problemFetchingFailure: string | null;
  problemValid: boolean;
  displayInstructions: boolean;
  responding: boolean;
  fetchProblemRequest: () => void;
  fetchProblemFailure: (errorMessage: string) => void;
  fetchProblemSuccess: (response: Problem) => void;
  fetchUserRequest: () => void;
  fetchUserFailure: (errorMessage: string) => void;
  fetchUserSuccess: (response: User) => void;
  beginResponse: () => void;
  endResponse: () => void;
  push: (url: string) => void;
  toggleDisplayingInstructions: () => void;
}

export class App extends React.Component<AppProps> {
  componentDidMount() {
    const { problemValid } = this.props;

    if (!problemValid) {
      this.fetchProblem();
    }
  }

  componentDidUpdate() {
    const { problemValid } = this.props;

    if (!problemValid) {
      this.fetchProblem();
    }
  }

  fetchProblem = () => {
    const { fetchProblemRequest, fetchProblemFailure, fetchProblemSuccess, match } = this.props;

    fetchProblemRequest();

    fetch(`/${match.params.problemId}.json`)
      .then(r => r.json())
      .then(response => fetchProblemSuccess(response), error => fetchProblemFailure(error.message));
  };

  foo = async (diagramId: string) => {
    const {
      user,
      fetchUserRequest,
      fetchUserFailure,
      fetchUserSuccess,
      problem,
      responding,
      beginResponse,
      endResponse,
      push,
    } = this.props;

    if (problem == null || responding) {
      return;
    }

    beginResponse();

    try {
      await fetch("/response/", {
        method: "POST",
        body: { answer: diagramId, user: user.id, problem: problem.id },
      });

      fetchUserRequest();

      try {
        const updatedUser = await fetch(`/user/${user.id}`).then(r => r.json());
        fetchUserSuccess(updatedUser);
        push(updatedUser.nextProblemId);
      } catch (e) {
        // tslint:disable: no-console
        console.log(e);
        fetchUserFailure(e.message);
      }
    } catch (e) {
      // tslint:disable: no-console
      console.log(e);
    }

    endResponse();
  };

  render() {
    const { user, problem, displayInstructions, toggleDisplayingInstructions } = this.props;

    const handleAnswer = (diagramId: string) => {
      this.foo(diagramId);
    };

    return (
      <div className="App">
        <Game
          problem={problem}
          handleAnswer={handleAnswer}
          user={user}
          toggleDisplayingInstructions={toggleDisplayingInstructions}
          displayInstructions={displayInstructions}
        />
      </div>
    );
  }
}
