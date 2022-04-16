import React from 'react';
import '../../../styles/main.scss';

import { Direction } from '../../../shared/PropTypes';

export interface Grid {
  direction: Direction;
  isWrapped?: boolean;
  children: React.ReactNode;
}

const Grid = (props: Grid) => {
  const dirClass = (() => {
    switch (props.direction) {
      case Direction.right:
        return 'dirRight';
      case Direction.left:
        return 'dirLeft';
      case Direction.down:
        return 'dirDown';
      case Direction.up:
        return 'dirUp';
      default:
        return 'dirRight';
    }
  })();

  return (
    <div
      className={`grid ${dirClass} ${props.isWrapped == null || props.isWrapped ? 'wrap' : null}`}
    >
      {props.children}
    </div>
  );
};

export default Grid;
