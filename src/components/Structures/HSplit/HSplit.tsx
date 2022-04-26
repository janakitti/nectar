import React from 'react';
import '../../../styles/main.scss';

export interface IHSplit {
  children: React.ReactNode;
  pSplit?: number;
  fLeft?: number;
  fRight?: number;
  bgColor?: string;
}

const HSplit = (props: IHSplit) => {
  const leftArgs = (() => {
    if (props.pSplit) {
      return {
        height: `${props.pSplit}%`,
      };
    } else if (props.fLeft) {
      return {
        height: `${props.fLeft}em`,
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
        height: `${props.fRight}em`,
      };
    } else {
      return {
        flexGrow: 1,
      };
    }
  })();

  return (
    <div className="hsplit-container">
      <div
        className="hsplit-section hsplit-left"
        style={{ ...leftArgs, backgroundColor: props.bgColor }}
      >
        {React.Children.toArray(props.children)[0]}
      </div>
      <div
        className="hsplit-section hsplit-right"
        style={{ ...rightArgs, backgroundColor: props.bgColor }}
      >
        {React.Children.toArray(props.children)[1]}
      </div>
    </div>
  );
};

export default HSplit;
