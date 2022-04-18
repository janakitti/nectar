import React from 'react';
import { IBreakPoints } from '../../../shared/PropTypes';
import useBreakpoint from '../../../shared/useBreakpoint';
import { getValueAtBreakpoint } from '../../../shared/util';
import '../../../styles/main.scss';

export interface IColProps {
  children: React.ReactNode;
  width?: IBreakPoints;
  bgColor?: string;
}

const Col = (props: IColProps) => {
  const bp = useBreakpoint();
  return (
    <div
      className="col"
      style={{ backgroundColor: props.bgColor, flexGrow: getValueAtBreakpoint(bp, 1, props.width) }}
    >
      {props.children}
    </div>
  );
};

export default Col;
