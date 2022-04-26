import React from 'react';
import '../../../styles/main.scss';
import styled, { css } from 'styled-components';

export interface IHeader1Props {
  children: React.ReactNode;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

const Header1 = (props: IHeader1Props) => {
  return (
    <NectarHeader1 pt={props.pt} pr={props.pr} pb={props.pb} pl={props.pl}>
      {props.children}
    </NectarHeader1>
  );
};

const NectarHeader1 = styled.span<{ pt?: number; pr?: number; pb?: number; pl?: number }>(
  ({ pt, pr, pb, pl }) => css`
    font-family: Poppins;
    font-weight: 500;
    font-size: 1.25em;
    padding: ${pt || 0}em ${pr || 0}em ${pb || 0}em ${pl || 0}em;
  `
);

export default Header1;
