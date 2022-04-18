import React from 'react';
import '../../../styles/main.scss';
import Paddable from '../../Structures/Paddable/Paddable';

export interface IHeader1Props {
  children: React.ReactNode;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

const Header1 = (props: IHeader1Props) => {
  return (
    <Paddable top={props.pt} right={props.pr} bottom={props.pb} left={props.pl}>
      <span className="header1">{props.children}</span>
    </Paddable>
  );
};

export default Header1;
