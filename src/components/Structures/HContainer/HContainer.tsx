import React from 'react';
import '../../../styles/main.scss';

export interface IHContainerProps {
  children: React.ReactNode;
}

const HContainer = (props: IHContainerProps) => {
  return <div className="hcontainer">{props.children}</div>;
};

export default HContainer;
