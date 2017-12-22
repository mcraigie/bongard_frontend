import React from 'react';
import PropTypes from 'prop-types';

const PreviousResult = ({ previousAnswerCorrect }) => (
  <div className={`previous-result ${previousAnswerCorrect ? 'correct' : 'incorrect'}`}>
    <p>{previousAnswerCorrect ? 'Correct answer :)' : 'Incorrect answer :('}</p>
  </div>
);

PreviousResult.propTypes = {
  previousAnswerCorrect: PropTypes.bool.isRequired,
};

export default PreviousResult;
