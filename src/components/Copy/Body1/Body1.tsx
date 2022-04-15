import React from 'react';
import '../../../styles/main.scss';

export interface IBody1Props {
  children: React.ReactNode;
}

const Body1 = (props: IBody1Props) => {
  return <h1 className="body1">{props.children}</h1>;
};

export default Body1;
