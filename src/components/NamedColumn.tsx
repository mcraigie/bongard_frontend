import * as React from "react";

import { Diagram } from "./Diagram";

export interface NamedColumnProps {
  name: string;
  isAnswerColumn: boolean;
  diagrams: Array<Diagram>;
  handleAnswer?: (id: string) => void;
}

export const NamedColumn = (props: NamedColumnProps) => {
  const { name, isAnswerColumn, diagrams, handleAnswer } = props;

  return (
    <div className="named-column">
      <div className="name">
        <h2>{name}</h2>
      </div>
      <div className={isAnswerColumn ? "answer-set" : "diagram-set"}>
        {diagrams.map(diagram => (
          <Diagram
            key={diagram.id}
            id={diagram.id}
            specification={diagram.specification}
            isAnswerColumn={isAnswerColumn}
            handleAnswer={handleAnswer}
          />
        ))}
      </div>
    </div>
  );
};
