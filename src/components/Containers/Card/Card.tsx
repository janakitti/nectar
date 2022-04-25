import React from 'react';

import styled, { css } from 'styled-components';
import '../../../styles/main.scss';

export interface ICardProps {
  label: string;
  children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ label, children }) => {
  return <NectarCard>{children}</NectarCard>;
};

const NectarCard = styled.div(
  ({ theme: { colors, containers } }) => css`
    border-radius: ${containers?.borderRadius}em;
    background-color: ${colors?.light0};
    box-shadow: ${containers?.dropShadow?.hOffset}px ${containers?.dropShadow?.vOffset}px
      ${containers?.dropShadow?.blur}px rgba(0, 0, 0, ${containers?.dropShadow?.opacity});
    padding: ${containers?.padding}em;
  `
);

export default Card;
