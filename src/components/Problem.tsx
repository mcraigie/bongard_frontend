import * as React from "react";

import { NamedColumn } from "./NamedColumn";

export interface ProblemProps {
  problem: Problem;
  handleAnswer: any;
}

export const Problem = (props: ProblemProps) => {
  const { problem, handleAnswer } = props;
  return (
    <div className="problem">
      <NamedColumn name="Followers" diagrams={problem.followers} isAnswerColumn={false} />

      <NamedColumn name="Rogues" diagrams={problem.rogues} isAnswerColumn={false} />

      <NamedColumn name="?" isAnswerColumn diagrams={problem.answers} handleAnswer={handleAnswer} />
    </div>
  );
};
