import * as React from "react";

import { isTouchDevice } from "../utils";

export interface DiagramProps {
  id: string;
  specification: Array<Array<Cell>>;
  isAnswerColumn: boolean;
  handleAnswer?: (id: string) => void;
}

export const Diagram = (props: DiagramProps) => {
  const { id, specification, isAnswerColumn, handleAnswer } = props;

  return (
    <div
      className={isAnswerColumn && !isTouchDevice() ? "diagram hoverable" : "diagram"}
      onClick={isAnswerColumn && handleAnswer ? () => handleAnswer(id) : f => f} // TODO: dummy func best practices?
      role="button" // TODO: enable full keyboard support. not a button if isAnswerColumn is false
    >
      {specification.map((row, yPos) =>
        row.map((variety, xPos) => (
          <div className={`cell variety-${variety}`} key={`${xPos}_${yPos}`} />
        ))
      )}
    </div>
  );
};
