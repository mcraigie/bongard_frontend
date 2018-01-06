import * as React from "react";

import { Button } from "./Button";

export const GameFooter = () => {
  return (
    <div className="footer-band">
      <p>
        Created by{" "}
        {
          <Button
            href="https://twitter.com/MaxCraigie"
            className="twitter-button"
            text="@MaxCraigie"
          />
        }{" "}
        Want more Bongard Problems?{" "}
        {
          <Button
            href="https://goo.gl/forms/2jUei1oCuMmx1FZ83"
            className="survey-button"
            text="Click Here"
          />
        }
      </p>
    </div>
  );
};
