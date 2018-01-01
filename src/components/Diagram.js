import React from 'react';
import PropTypes from 'prop-types';

const Diagram = ({
  id,
  specification,
  isAnswerColumn,
  handleAnswer,
  isTouchDevice,
}) => (
  <div
    className={isAnswerColumn && !isTouchDevice ? 'diagram hoverable' : 'diagram'}
    onClick={isAnswerColumn ? () => handleAnswer(id) : null}
    role="button" // TODO: enable full keyboard support. not a button if isAnswerColumn is false
  >
    {specification.map((row, yPos) => row.map((variety, xPos) =>
      <div className={`cell variety-${variety}`} key={`${xPos}_${yPos}`} />))
    }
  </div>
);

Diagram.propTypes = {
  id: PropTypes.string.isRequired,
  specification: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  isAnswerColumn: PropTypes.bool.isRequired,
  handleAnswer: PropTypes.func,
  isTouchDevice: PropTypes.bool,
};

Diagram.defaultProps = {
  isTouchDevice: false,
  handleAnswer: null,
};

export default Diagram;
