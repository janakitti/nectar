import React from 'react';
import '../../../styles/main.scss';

export interface IPaddableProps {
  children: React.ReactNode;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const Paddable = (props: IPaddableProps) => {
  return (
    <div
      className="paddable"
      style={{
        paddingTop: `${props.top}em`,
        paddingRight: `${props.right}em`,
        paddingBottom: `${props.bottom}em`,
        paddingLeft: `${props.left}em`,
      }}
    >
      {props.children}
    </div>
  );
};

export default Paddable;
