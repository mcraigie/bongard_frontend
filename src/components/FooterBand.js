import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const FooterBand = ({ isTouchDevice }) => {
  const twitterButton = (
    <Button
      href="https://twitter.com/MaxCraigie"
      className="twitter-button"
      isTouchDevice={isTouchDevice}
      text="@MaxCraigie"
    />
  );

  const surveyButton = (
    <Button
      href="https://goo.gl/forms/2jUei1oCuMmx1FZ83"
      className="survey-button"
      isTouchDevice={isTouchDevice}
      text="Click Here"
    />
  );

  return (
    <div className="footer-band">
      <p>
        Created by {twitterButton} Want more Bongard Problems? {surveyButton}
      </p>
    </div>
  );
};

FooterBand.propTypes = {
  isTouchDevice: PropTypes.bool.isRequired,
};

export default FooterBand;
