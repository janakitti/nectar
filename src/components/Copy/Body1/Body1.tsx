import React from 'react';
import '../../../styles/main.scss';
import styled, { css } from 'styled-components';

export interface IBody1Props {
  children: React.ReactNode;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

const Body1 = (props: IBody1Props) => {
  return (
    <NectarBody1 pt={props.pt} pr={props.pr} pb={props.pb} pl={props.pl}>
      {props.children}
    </NectarBody1>
  );
};

const NectarBody1 = styled.p<{ pt?: number; pr?: number; pb?: number; pl?: number }>(
  ({ pt, pr, pb, pl }) => css`
    font-family: Roboto;
    font-weight: 300;
    font-size: 0.95em;
    padding: ${pt || 0}em ${pr || 0}em ${pb || 0}em ${pl || 0}em;
  `
);

export default Body1;
