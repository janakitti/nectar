import React from 'react';
import '../../styles/main.scss';

import styled, { css } from 'styled-components';
import { Level } from '../../shared/PropTypes';

export interface IButtonProps {
  label: string;
  type: Level;
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  return (
    <NectarButton className={`${props.type}`} disabled={props.isDisabled} onClick={props.onClick}>
      {props.label}
    </NectarButton>
  );
};

const NectarButton = styled.button(
  ({ theme: { colors, containers, transitions } }) => css`
    border-radius: ${containers?.borderRadius}em;
    padding: 0.5em 1em;
    font-size: 0.85em;
    font-family: Poppins;
    transition: ${transitions?.hover}s;

    &.primary {
      background-color: ${colors?.primary0};
      color: #ffffff;
      border-width: 0;

      &:hover {
        background-color: ${colors?.primary1};
        transition: ${transitions?.hover}s;
      }

      &:disabled {
        background-color: ${colors?.light1};
        transition: ${transitions?.hover}s;
      }
    }

    &.secondary {
      background-color: ${colors?.light0};
      padding: calc(0.5em - ${containers?.borderWidth}em) calc(1em - ${containers?.borderWidth}em);
      border-color: ${colors?.primary0};
      border-style: solid;
      border-width: ${containers?.borderWidth}em;
      color: ${colors?.primary0};

      &:hover {
        background-color: ${colors?.light1};
        transition: ${transitions?.hover}s;
      }

      &:disabled {
        background-color: ${colors?.light0};
        border-color: ${colors?.light1};
        color: ${colors?.light2};
        transition: ${transitions?.hover}s;
      }
    }

    &:hover {
      cursor: pointer;
    }
  `
);

export default Button;
