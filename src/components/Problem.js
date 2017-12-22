import React from 'react';
import PropTypes from 'prop-types';

import NamedColumn from './NamedColumn';

const Problem = ({ isTouchDevice, problem, handleAnswer }) => (
  <div className="problem">
    <NamedColumn
      name="Followers"
      diagrams={problem.followers}
      isAnswerColumn={false}
    />

    <NamedColumn
      name="Rogues"
      diagrams={problem.rogues}
      isAnswerColumn={false}
    />

    <NamedColumn
      name="?"
      isAnswerColumn
      diagrams={problem.answers}
      handleAnswer={handleAnswer}
      isTouchDevice={isTouchDevice}
    />
  </div>
);

Problem.propTypes = {
  isTouchDevice: PropTypes.bool.isRequired,
  problem: PropTypes.shape({
    answers: PropTypes.array,
    correctAnswerId: PropTypes.string,
    followers: PropTypes.array,
    id: PropTypes.string,
    nextProblemId: PropTypes.string,
    rogues: PropTypes.array,
  }).isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default Problem;