import React from 'react';
import '../../../styles/main.scss';

export interface IVContainerProps {
  children: React.ReactNode;
}

const VContainer = (props: IVContainerProps) => {
  return <div className="vcontainer">{props.children}</div>;
};

export default VContainer;
