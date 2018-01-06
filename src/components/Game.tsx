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

export class Game extends React.Component<GameProps> {
  render() {
    const {
      problem,
      problemFetching,
      problemFetchingFailure,
      handleAnswer,
      user,
      toggleInstructions,
      displayInstructions,
    } = this.props;

    let body = undefined;

    if (problemFetching) {
      body = <BlankProblem />;
    } else if (problemFetchingFailure) {
      body = (
        <p className="incorrect">Something went wrong while trying to contact the server :(</p>
      );
    } else if (problem) {
      body = <Problem problem={problem} handleAnswer={handleAnswer} />;
    }

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

        {body}

        <GameFooter />
      </div>
    );
  }
}
