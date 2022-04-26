import React from 'react';

import styled, { css } from 'styled-components';
import '../../../styles/main.scss';

export interface ICardProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

const Card: React.FC<ICardProps> = (props) => {
  return (
    <NectarCard
      width={props.width}
      height={props.height}
      pt={props.pt}
      pr={props.pr}
      pb={props.pb}
      pl={props.pl}
    >
      {props.children}
    </NectarCard>
  );
};

const NectarCard = styled.div<{
  width?: number;
  height?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}>(
  ({ theme: { colors, containers }, width, height, pt, pr, pb, pl }) => css`
    width: calc(100% - 2 * ${containers?.padding}em);
    height: ${height}em;
    border-radius: ${containers?.borderRadius}em;
    background-color: ${colors?.light0};
    box-shadow: ${containers?.dropShadow?.hOffset}px ${containers?.dropShadow?.vOffset}px
      ${containers?.dropShadow?.blur}px rgba(0, 0, 0, ${containers?.dropShadow?.opacity});
    padding: ${containers?.padding}em;
    margin: ${pt || 0}em ${pr || 0}em ${pb || 0}em ${pl || 0}em;
  `
);

export default Card;
