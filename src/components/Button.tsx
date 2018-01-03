import * as React from "react";

import { isTouchDevice } from "../utils";

export interface ButtonProps {
  href?: string;
  onClick?: () => void;
  className: string;
  text: string;
}

export const Button = (props: ButtonProps) => {
  const { href, onClick, className, text } = props;

  return (
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
};
