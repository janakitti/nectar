import React from 'react';

import styled, { css } from 'styled-components';
import '../../../styles/main.scss';

export interface ICardProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

const Card: React.FC<ICardProps> = (props) => {
  return (
    <NectarCard width={props.width} height={props.height}>
      {props.children}
    </NectarCard>
  );
};

const NectarCard = styled.div<{ width?: number; height?: number }>(
  ({ theme: { colors, containers }, width, height }) => css`
    width: ${width}em;
    height: ${height}em;
    border-radius: ${containers?.borderRadius}em;
    background-color: ${colors?.light0};
    box-shadow: ${containers?.dropShadow?.hOffset}px ${containers?.dropShadow?.vOffset}px
      ${containers?.dropShadow?.blur}px rgba(0, 0, 0, ${containers?.dropShadow?.opacity});
    padding: ${containers?.padding}em;
  `
);

export default Card;
