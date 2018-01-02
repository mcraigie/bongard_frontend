import * as React from "react";

export interface PreviousResultProps {
  previousAnswerCorrect: boolean;
}

export const PreviousResult = (props: PreviousResultProps) => {
  const { previousAnswerCorrect } = props;

  return (
    <div className={`previous-result ${previousAnswerCorrect ? "correct" : "incorrect"}`}>
      <p>{previousAnswerCorrect ? "Correct answer :)" : "Incorrect answer :("}</p>
    </div>
  );
};
