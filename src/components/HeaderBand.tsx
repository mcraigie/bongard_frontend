import * as React from "react";

import { Button } from "./Button";

export interface HeaderBandProps {
  currentStreak: number;
  bestStreak: number;
  displayInstructions: boolean;
  toggleDisplayingInstructions: () => void;
}

export const HeaderBand = (props: HeaderBandProps) => {
  const { currentStreak, bestStreak, toggleDisplayingInstructions, displayInstructions } = props;

  return (
    <div className="header-band">
      <p className="sub-text">
        <Button
          onClick={toggleDisplayingInstructions}
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
