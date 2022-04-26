import React from 'react';
import '../../../styles/main.scss';

export interface IHSplit {
  children: React.ReactNode;
  pSplit?: number;
  fTop?: number;
  fBottom?: number;
  bgColor?: string;
}

const HSplit = (props: IHSplit) => {
  const topArgs = (() => {
    if (props.pSplit) {
      return {
        height: `${props.pSplit}%`,
      };
    } else if (props.fTop) {
      return {
        height: `${props.fTop}em`,
      };
    } else {
      return {
        flexGrow: 1,
      };
    }
  })();

  const bottomArgs = (() => {
    if (!props.pSplit && !props.fTop && props.fBottom) {
      return {
        height: `${props.fBottom}em`,
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
        style={{ ...topArgs, backgroundColor: props.bgColor }}
      >
        {React.Children.toArray(props.children)[0]}
      </div>
      <div
        className="hsplit-section hsplit-right"
        style={{ ...bottomArgs, backgroundColor: props.bgColor }}
      >
        {React.Children.toArray(props.children)[1]}
      </div>
    </div>
  );
};

export default HSplit;
