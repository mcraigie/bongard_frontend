import React from "react";
import PropTypes from "prop-types";

import Instructions from "./Instructions";
import PreviousResult from "./PreviousResult";

const StatusBand = ({ previousAnswerCorrect, displayInstructions }) => {
  let content = null;

  if (displayInstructions) {
    content = <Instructions />;
  } else if (previousAnswerCorrect != null) {
    content = <PreviousResult previousAnswerCorrect={previousAnswerCorrect} />;
  }

  return <div className="status-band">{content}</div>;
};

StatusBand.propTypes = {
  previousAnswerCorrect: PropTypes.bool,
  displayInstructions: PropTypes.bool.isRequired,
};

StatusBand.defaultProps = {
  previousAnswerCorrect: null,
};

export default StatusBand;
