import * as React from "react";

import { GameHeader } from "./GameHeader";
import { GameFooter } from "./GameFooter";

import { StatusBand } from "./StatusBand";
import { Problem } from "./Problem";
import { BlankProblem } from "./BlankProblem";

export interface GameProps {
  user: User;
  problem: Problem | null;
  problemFetching: boolean;
  problemFetchingFailure: string | null;
  displayInstructions: boolean;
  handleAnswer?: (id: string) => void;
  toggleInstructions: () => void;
}

export const Game = (props: GameProps) => {
  const {
    problem,
    problemFetching,
    problemFetchingFailure,
    handleAnswer,
    user,
    toggleInstructions,
    displayInstructions,
  } = props;

  const body = () => {
    if (problemFetching) {
      // fetching problem
      return <BlankProblem />;
    } else if (problemFetchingFailure) {
      // failed to fetch
      return <p className="incorrect">Something went wrong while trying to fetch the problem.</p>;
    } else if (problem) {
      // problem available
      return <Problem problem={problem} handleAnswer={handleAnswer} />;
    } else {
      // unknown error
      return <p className="incorrect">An unknown error has occured.</p>;
    }
  };

  return (
    <div className="game-band">
      <GameHeader
        bestStreak={user.bestStreak}
        currentStreak={user.currentStreak}
        toggleInstructions={toggleInstructions}
        displayInstructions={displayInstructions}
      />

      <StatusBand
        previousAnswerCorrect={user.previousResponseCorrect}
        displayInstructions={displayInstructions}
      />

      {body()}

      <GameFooter />
    </div>
  );
};
