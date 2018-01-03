import * as React from "react";

import { Instructions } from "./Instructions";
import { PreviousResult } from "./PreviousResult";

export interface StatusBandProps {
  previousAnswerCorrect?: boolean;
  displayInstructions: boolean;
}

export const StatusBand = (props: StatusBandProps) => {
  const { previousAnswerCorrect, displayInstructions } = props;

  return (
    <div className="status-band">
      {displayInstructions || previousAnswerCorrect == null ? (
        <Instructions />
      ) : (
        <PreviousResult previousAnswerCorrect={previousAnswerCorrect} />
      )}
    </div>
  );
};
