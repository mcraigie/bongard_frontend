import * as React from "react";
import { RouteComponentProps } from "react-router";

import { HeaderBand } from "./HeaderBand";
import { FooterBand } from "./FooterBand";

import { StatusBand } from "./StatusBand";
import { Problem } from "./Problem";
import { BlankProblem } from "./BlankProblem";

export interface GameProps extends RouteComponentProps<{ problemId: string }> {
  loading: boolean;
  currentProblem: Problem;
  handleAnswer: (id: string) => void;
  user: User;
  toggleDisplayingInstructions: () => void;
  displayInstructions: boolean;
  setCurrentProblem: (problem: Problem) => void;
  setError: (error: Error) => void;
}

export class Game extends React.Component<GameProps> {
  componentDidMount() {
    const { match } = this.props;
    this.requestProblem(match.params.problemId);
  }

  componentDidUpdate() {
    const { loading, match } = this.props;

    if (loading) {
      this.requestProblem(match.params.problemId);
    }
  }

  requestProblem = (problemId: string) => {
    const { setCurrentProblem, setError } = this.props;

    fetch(`/${problemId}.json`)
      .then(res => res.json())
      .then(currentProblem => setCurrentProblem(currentProblem), error => setError(error));
  };

  render() {
    const {
      loading,
      currentProblem,
      handleAnswer,
      user,
      toggleDisplayingInstructions,
      displayInstructions,
    } = this.props;

    let body = (
      <p className="incorrect">Something went wrong while trying to contact the server :(</p>
    );

    if (loading) {
      body = <BlankProblem />;
    } else if (currentProblem) {
      body = <Problem problem={currentProblem} handleAnswer={handleAnswer} />;
    }

    return (
      <div className="game-band">
        <HeaderBand
          bestStreak={user.bestStreak}
          currentStreak={user.currentStreak}
          toggleDisplayingInstructions={toggleDisplayingInstructions}
          displayInstructions={displayInstructions}
        />

        <StatusBand
          previousAnswerCorrect={user.previousResponseCorrect}
          displayInstructions={displayInstructions}
        />

        {body}

        <FooterBand />
      </div>
    );
  }
}
