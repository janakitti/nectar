import React from 'react';
import '../../../styles/main.scss';
import styled, { css } from 'styled-components';

export interface IVContainerProps {
  children: React.ReactNode;
  alignItems?: string;
  justifyContent?: string;
  gap?: number;
  backgroundColor?: string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  px?: number;
  py?: number;
}

const VContainer = (props: IVContainerProps) => {
  return (
    <NectarVContainer
      alignItems={props.alignItems}
      justifyContent={props.justifyContent}
      gap={props.gap}
      backgroundColor={props.backgroundColor}
      pt={props.pt || props.py}
      pr={props.pr || props.px}
      pb={props.pb || props.py}
      pl={props.pl || props.px}
    >
      {props.children}
    </NectarVContainer>
  );
};

const NectarVContainer = styled.div<{
  alignItems?: string;
  justifyContent?: string;
  gap?: number;
  backgroundColor?: string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}>(
  ({ alignItems, justifyContent, gap, backgroundColor, pt, pr, pb, pl }) => css`
    display: flex;
    flex-direction: column;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    gap: ${gap}em;
    background-color: ${backgroundColor};
    padding: ${pt || 0}em ${pr || 0}em ${pb || 0}em ${pl || 0}em;
  `
);

export default VContainer;
