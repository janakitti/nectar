import React from 'react';
import '../../../styles/main.scss';

export interface IRowProps {
  children: React.ReactNode;
  sizing?: number[];
  bgColor?: string;
}

const Row = (props: IRowProps) => {
  React.Children.toArray(props.children).forEach((child) => {
    child.valueOf;
  });
  return (
    <div className="nectar-row" style={{ backgroundColor: props.bgColor }}>
      {props.children}
    </div>
  );
};

export default Row;
