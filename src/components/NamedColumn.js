import React from 'react';
import PropTypes from 'prop-types';

import Diagram from './Diagram';

const NamedColumn = ({
  name,
  isAnswerColumn,
  diagrams,
  handleAnswer,
  isTouchDevice,
}) => (
  <div className="named-column">
    <div className="name">
      <h2>{name}</h2>
    </div>
    <div className={isAnswerColumn ? 'answer-set' : 'diagram-set'}>
      {diagrams.map(diagram => (
        <Diagram
          key={diagram.id}
          id={diagram.id}
          specification={diagram.specification}
          isAnswerColumn={isAnswerColumn}
          handleAnswer={handleAnswer}
          isTouchDevice={isTouchDevice}
        />
      ))}
    </div>
  </div>
);

NamedColumn.propTypes = {
  name: PropTypes.string.isRequired,
  diagrams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    specification: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  })).isRequired,
  isAnswerColumn: PropTypes.bool.isRequired,
  handleAnswer: PropTypes.func,
  isTouchDevice: PropTypes.bool,
};

NamedColumn.defaultProps = {
  handleAnswer: null,
  isTouchDevice: false,
};

export default NamedColumn;
