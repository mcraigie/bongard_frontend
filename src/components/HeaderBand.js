import React from 'react';
import PropTypes from 'prop-types';

const HeaderBand = ({ currentStreak, bestStreak }) => (
  <div className="header-band">
    <p />
    <h1>Bongard!</h1>
    <p className="sub-text">Current Streak: {currentStreak} | Best: {bestStreak}</p>
  </div>
);

HeaderBand.propTypes = {
  bestStreak: PropTypes.number.isRequired,
  currentStreak: PropTypes.number.isRequired,
};

export default HeaderBand;
