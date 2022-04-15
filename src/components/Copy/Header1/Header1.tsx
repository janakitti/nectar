import React from 'react';
import '../../../styles/main.scss';

export interface IHeader1Props {
  children: React.ReactNode;
}

const Header1 = (props: IHeader1Props) => {
  return <h1 className="header1">{props.children}</h1>;
};

export default Header1;
