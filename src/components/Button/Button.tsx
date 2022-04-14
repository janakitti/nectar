import React from 'react';
import '../../styles/main.scss';

import { Level } from '../../shared/PropTypes';

export interface IButtonProps {
  label: string;
  type: Level;
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  return (
    <button className={`button ${props.type}`} disabled={props.isDisabled} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
