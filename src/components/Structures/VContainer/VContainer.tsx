import React from 'react';
import '../../../styles/main.scss';
import styled, { css } from 'styled-components';

export interface IVContainerProps {
  children: React.ReactNode;
  alignItems?: string;
  justifyContent?: string;
}

const VContainer = (props: IVContainerProps) => {
  return (
    <NectarVContainer alignItems={props.alignItems} justifyContent={props.justifyContent}>
      {props.children}
    </NectarVContainer>
  );
};

const NectarVContainer = styled.div<{ alignItems?: string; justifyContent?: string }>(
  ({ alignItems, justifyContent }) => css`
    display: flex;
    flex-direction: column;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `
);

export default VContainer;
