import * as React from "react";

import { NamedColumn } from "./NamedColumn";

export interface ProblemProps {
  problem: Problem;
  handleAnswer: (id: string) => void;
}

export const Problem = (props: ProblemProps) => {
  const { problem, handleAnswer } = props;
  return (
    <div className="problem">
      <NamedColumn name="Followers" diagrams={problem.followers} isAnswerColumn={false} />

      <NamedColumn name="Rogues" diagrams={problem.rogues} isAnswerColumn={false} />

      <NamedColumn
        name="?"
        diagrams={problem.answers}
        isAnswerColumn={true}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};
