import React from 'react';
import '../../../styles/main.scss';
import Paddable from '../../Structures/Paddable/Paddable';
import styled, { css } from 'styled-components';

export interface ITextFieldProps {
  type: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

const TextField = (props: ITextFieldProps) => {
  return (
    <Paddable top={props.pt} right={props.pr} bottom={props.pb} left={props.pl}>
      <NectarInput
        type={props.type}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
      />
    </Paddable>
  );
};

const NectarInput = styled.input(
  ({ theme: { colors, containers } }) => css`
    background-color: ${colors?.light0};
    padding: ${containers?.fieldPadding}em;
    border-width: 0.15em;
    border-color: ${colors?.light2};
    border-radius: ${containers?.borderRadius}em;
    border-style: solid;
    font-family: Lato;

    &::placeholder {
      color: ${colors?.light2};
    }

    &:focus {
      outline-color: ${colors?.light2};
    }
  `
);

export default TextField;
