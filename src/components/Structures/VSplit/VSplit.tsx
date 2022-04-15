import React from 'react';
import '../../../styles/main.scss';

export interface IVSplit {
  pSplit?: number;
  fLeft?: number;
  fRight?: number;
  children: React.ReactNode;
}

const VSplit = (props: IVSplit) => {
  const leftArgs = (() => {
    if (props.pSplit) {
      return {
        width: `${props.pSplit}%`,
      };
    } else if (props.fLeft) {
      return {
        width: `${props.fLeft}em`,
      };
    } else {
      return {
        flexGrow: 1,
      };
    }
  })();

  const rightArgs = (() => {
    if (!props.pSplit && !props.fLeft && props.fRight) {
      return {
        width: `${props.fRight}em`,
      };
    } else {
      return {
        flexGrow: 1,
      };
    }
  })();

  return (
    <div className="vsplit-container">
      <div className="vsplit-section vsplit-left" style={leftArgs}>
        {React.Children.toArray(props.children)[0]}
      </div>
      <div className="vsplit-section vsplit-right" style={rightArgs}>
        {React.Children.toArray(props.children)[1]}
      </div>
    </div>
  );
};

export default VSplit;
