import React from "react";
import PropTypes from "prop-types";

import { isTouchDevice } from "../utils";

const Button = ({ href, onClick, className, text }) => (
  <a
    href={href}
    onClick={onClick}
    className={`button ${isTouchDevice() ? "" : "hoverable"} ${className}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  href: null,
  onClick: null,
};

export default Button;
