import * as React from "react";

import { HeaderBand } from "./HeaderBand";
import { FooterBand } from "./FooterBand";

import { StatusBand } from "./StatusBand";
import { Problem } from "./Problem";
import { BlankProblem } from "./BlankProblem";

export interface GameProps {
  user: User;
  problem: Problem | null;
  displayInstructions: boolean;
  handleAnswer?: (id: string) => void;
  toggleDisplayingInstructions: () => void;
}

export class Game extends React.Component<GameProps> {
  render() {
    const {
      problem,
      handleAnswer,
      user,
      toggleDisplayingInstructions,
      displayInstructions,
    } = this.props;

    let body = (
      <p className="incorrect">Something went wrong while trying to contact the server :(</p>
    );

    if (!problem) {
      body = <BlankProblem />;
    } else if (problem) {
      body = <Problem problem={problem} handleAnswer={handleAnswer} />;
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
