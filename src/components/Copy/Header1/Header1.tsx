import React from 'react';
import '../../../styles/main.scss';

export interface IHeader1Props {
  children: React.ReactNode;
}

const Header1 = (props: IHeader1Props) => {
  return <span className="header1">{props.children}</span>;
};

export default Header1;
