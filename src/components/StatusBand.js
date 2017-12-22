import React from 'react';
import PropTypes from 'prop-types';

import Instructions from './Instructions';
import PreviousResult from './PreviousResult';

const StatusBand = ({ previousAnswerCorrect }) => {
  let content = null;

  if (previousAnswerCorrect == null) {
    content = <Instructions />;
  } else {
    content = <PreviousResult previousAnswerCorrect={previousAnswerCorrect} />;
  }

  return (
    <div className="status-band">
      {content}
    </div>
  );
};

StatusBand.propTypes = {
  previousAnswerCorrect: PropTypes.bool,
};

StatusBand.defaultProps = {
  previousAnswerCorrect: null,
};

export default StatusBand;
