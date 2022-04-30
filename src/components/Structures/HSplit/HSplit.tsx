import React from 'react';
import '../../../styles/main.scss';
import styled, { css } from 'styled-components';

export interface IHSplit {
  children: React.ReactNode;
  pSplit?: number;
  fTop?: number;
  fBottom?: number;
  bgColor?: string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  px?: number;
  py?: number;
}

const HSplit = (props: IHSplit) => {
  const topHeight = (() => {
    if (props.pSplit) {
      return `${props.pSplit}%`;
    } else if (props.fTop) {
      return `${props.fTop}em`;
    }
  })();

  const bottomHeight = (() => {
    if (!props.pSplit && !props.fTop && props.fBottom) {
      return `${props.fBottom}em`;
    }
  })();

  return (
    <NectarHSplitContainer
      pt={props.pt || props.py}
      pr={props.pr || props.px}
      pb={props.pb || props.py}
      pl={props.pl || props.px}
      backgroundColor={props.bgColor}
    >
      <NectarHSplitTop height={topHeight} flexGrow={!Boolean(topHeight) ? 1 : undefined}>
        {React.Children.toArray(props.children)[0]}
      </NectarHSplitTop>
      <NectarHSplitBottom height={bottomHeight} flexGrow={!Boolean(bottomHeight) ? 1 : undefined}>
        {React.Children.toArray(props.children)[1]}
      </NectarHSplitBottom>
    </NectarHSplitContainer>
  );
};

const NectarHSplitContainer = styled.div<{
  backgroundColor?: string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}>(
  ({ backgroundColor, pt, pr, pb, pl }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    ${backgroundColor && `background-color: ${backgroundColor};`}
    padding: ${pt || 0}em ${pr || 0}em ${pb || 0}em ${pl || 0}em;
  `
);

const NectarHSplitSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  & > * {
    width: 100%;
  }
`;

const NectarHSplitTop = styled(NectarHSplitSection)<{
  height?: string;
  flexGrow?: number;
}>(
  ({ height, flexGrow }) => css`
    height: ${height};
    ${flexGrow && `flex-grow: ${flexGrow};`}
  `
);

const NectarHSplitBottom = styled(NectarHSplitSection)<{
  height?: string;
  flexGrow?: number;
}>(
  ({ height, flexGrow }) => css`
    height: ${height};
    ${flexGrow && `flex-grow: ${flexGrow};`}
  `
);

export default HSplit;
