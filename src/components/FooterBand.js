import React from "react";

import Button from "./Button";

const FooterBand = () => {
  const twitterButton = (
    <Button href="https://twitter.com/MaxCraigie" className="twitter-button" text="@MaxCraigie" />
  );

  const surveyButton = (
    <Button
      href="https://goo.gl/forms/2jUei1oCuMmx1FZ83"
      className="survey-button"
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

export default FooterBand;
