import React from 'react';
import '../../../styles/main.scss';
import Paddable from '../../Structures/Paddable/Paddable';

export interface IBody1Props {
  children: React.ReactNode;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

const Body1 = (props: IBody1Props) => {
  return (
    <Paddable top={props.pt} right={props.pr} bottom={props.pb} left={props.pl}>
      <h1 className="body1">{props.children}</h1>
    </Paddable>
  );
};

export default Body1;
