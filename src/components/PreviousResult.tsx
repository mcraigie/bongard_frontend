import * as React from "react";

export interface PreviousResultProps {
  previousAnswerCorrect?: boolean;
}

export const PreviousResult = (props: PreviousResultProps) => {
  const { previousAnswerCorrect } = props;

  switch (previousAnswerCorrect) {
    case undefined:
      return <div className="previous-result" />;
    case true:
      return (
        <div className="previous-result correct">
          <p>Correct answer :)</p>
        </div>
      );
    default:
      return (
        <div className="previous-result incorrect">
          <p>Incorrect answer :(</p>
        </div>
      );
  }
};
