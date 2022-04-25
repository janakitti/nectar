import React from 'react';
import '../../../styles/main.scss';
import styled, { css } from 'styled-components';
import Paddable from '../../Structures/Paddable/Paddable';

export interface ITextAreaProps {
  defaultValue?: string;
  placeholder?: string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

const TextArea = (props: ITextAreaProps) => {
  return (
    <Paddable top={props.pt} right={props.pr} bottom={props.pb} left={props.pl}>
      <NectarTextArea />
    </Paddable>
  );
};

const NectarTextArea = styled.textarea(
  ({ theme: { colors, containers } }) => css`
    background-color: ${colors?.light0};
    padding: ${containers?.fieldPadding}em;
    border-width: ${containers?.borderWidth}em;
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

export default TextArea;
