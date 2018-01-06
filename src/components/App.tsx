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
  actions: {
    fetchProblemRequest: () => void;
    fetchProblemFailure: (errorMessage: string) => void;
    fetchProblemSuccess: (response: Problem) => void;
    fetchUserRequest: () => void;
    fetchUserFailure: (errorMessage: string) => void;
    fetchUserSuccess: (response: User) => void;
    beginResponse: () => void;
    endResponse: () => void;
    push: (url: string) => void;
    toggleInstructions: () => void;
  };
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
    const { match, actions } = this.props;
    const { fetchProblemRequest, fetchProblemFailure, fetchProblemSuccess } = actions;

    fetchProblemRequest();

    fetch(`/${match.params.problemId}.json`)
      .then(r => r.json())
      .then(response => fetchProblemSuccess(response), error => fetchProblemFailure(error.message));
  };

  respondAndProceed = async (diagramId: string) => {
    const { user, problem, responding, actions } = this.props;

    const {
      fetchUserRequest,
      fetchUserFailure,
      fetchUserSuccess,
      beginResponse,
      endResponse,
      push,
    } = actions;

    if (responding || !problem) {
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
    const {
      user,
      problem,
      displayInstructions,
      problemFetching,
      problemFetchingFailure,
      actions,
    } = this.props;
    const { toggleInstructions } = actions;

    return (
      <div className="App">
        <Game
          problem={problem}
          problemFetching={problemFetching}
          problemFetchingFailure={problemFetchingFailure}
          handleAnswer={(diagramId: string) => this.respondAndProceed(diagramId)}
          user={user}
          toggleInstructions={toggleInstructions}
          displayInstructions={displayInstructions}
        />
      </div>
    );
  }
}
