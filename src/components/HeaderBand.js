import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const HeaderBand = ({ currentStreak, bestStreak, toggleInstructions, displayInstructions }) => (
  <div className="header-band">
    <p className="sub-text">
      <Button
        onClick={toggleInstructions}
        className="twitter-button"
        text={`${displayInstructions ? "Hide" : "Show"} Instructions`}
      />
    </p>
    <h1>Bongard!</h1>
    <p className="sub-text">
      Current Streak: {currentStreak} | Best: {bestStreak}
    </p>
  </div>
);

HeaderBand.propTypes = {
  bestStreak: PropTypes.number.isRequired,
  currentStreak: PropTypes.number.isRequired,
  toggleInstructions: PropTypes.func.isRequired,
  displayInstructions: PropTypes.bool.isRequired,
};

export default HeaderBand;
