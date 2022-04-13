import React from "react";

export interface IButtonProps {
  label: string;
}

const Button = (props: IButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
