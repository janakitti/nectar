import React from 'react';
import '../../styles/main.scss';

import styled from 'styled-components';
import { Level } from '../../shared/PropTypes';

export interface IButtonProps {
  label: string;
  type: Level;
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  return (
    <NectarButton disabled={props.isDisabled} onClick={props.onClick}>
      {props.label}
    </NectarButton>
  );
};

const NectarButton = styled.button`
  border-radius: 1em;
  padding: 0.5em 1em;
  font-size: 0.85em;
  font-family: Poppins;
  background-color: ${(props) => props.theme.colors?.primary0};
  transition: 1;
`;

export default Button;
