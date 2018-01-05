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
  previousAnswerCorrect?: boolean;
  handleAnswer: (id: string) => void;
  streaks: Streaks;
  toggleInstructions: () => void;
  displayInstructions: boolean;
  setCurrentProblem: (problem: Problem) => void;
  setError: (error: Error) => void;
  error: Error;
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
      previousAnswerCorrect,
      handleAnswer,
      streaks,
      toggleInstructions,
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
          bestStreak={streaks.best}
          currentStreak={streaks.current}
          toggleInstructions={toggleInstructions}
          displayInstructions={displayInstructions}
        />

        <StatusBand
          previousAnswerCorrect={previousAnswerCorrect}
          displayInstructions={displayInstructions}
        />

        {body}

        <FooterBand />
      </div>
    );
  }
}
