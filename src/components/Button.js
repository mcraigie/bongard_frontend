import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  href,
  onClick,
  isTouchDevice,
  className,
  text,
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`button ${isTouchDevice ? '' : 'hoverable'} ${className}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

Button.propTypes = {
  href: PropTypes.string,
  isTouchDevice: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  href: null,
  onClick: null,
};

export default Button;
