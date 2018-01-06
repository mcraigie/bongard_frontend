import * as React from "react";

import { Button } from "./Button";

export interface GameHeaderProps {
  currentStreak: number;
  bestStreak: number;
  displayInstructions: boolean;
  toggleInstructions: () => void;
}

export const GameHeader = (props: GameHeaderProps) => {
  const { currentStreak, bestStreak, toggleInstructions, displayInstructions } = props;

  return (
    <div className="header-band">
      <p className="sub-text">
        <Button
          onClick={toggleInstructions}
          className="twitter-button"
          text={`${displayInstructions ? "Hide" : "Show"} Instructions`}
        />
      </p>
      <h1>Bongard!</h1>
      <p className="sub-text">
        Current Streak: {currentStreak} | Best: {bestStreak}
      </p>
    </div>
  );
};
