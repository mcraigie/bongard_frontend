import * as React from "react";

import { HeaderBand } from "./HeaderBand";
import { FooterBand } from "./FooterBand";

import { StatusBand } from "./StatusBand";
import { Problem } from "./Problem";
import { BlankProblem } from "./BlankProblem";

export interface GameProps {
  loading: boolean;
  currentProblem: Problem;
  previousAnswerCorrect?: boolean;
  handleAnswer: any;
  streaks: Streaks;
  toggleInstructions: any;
  displayInstructions: boolean;
  match: any;
  setCurrentProblem: any;
  setError: any;
  error: Error;
}

export class Game extends React.Component<GameProps, {}> {
  componentDidMount() {
    this.requestProblem(this.props.match.params.problemId);
  }

  componentDidUpdate() {
    const { loading } = this.props;

    if (loading) {
      this.requestProblem(this.props.match.params.problemId);
    }
  }

  requestProblem = (problemId: string) => {
    const { setCurrentProblem, setError } = this.props;

    fetch(`http://127.0.0.1:8080/${problemId}.json`)
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
