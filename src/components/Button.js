import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  href,
  isTouchDevice,
  className,
  text,
}) => (
  <a
    href={href}
    className={`button ${isTouchDevice ? '' : 'hoverable'} ${className}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

Button.propTypes = {
  href: PropTypes.string.isRequired,
  isTouchDevice: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
