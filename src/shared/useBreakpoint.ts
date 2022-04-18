import { useState, useEffect } from 'react';
import { BreakPoints } from './PropTypes';

const getBreakPoint = (width: number): BreakPoints => {
  if (width < 320) {
    return BreakPoints.xs;
  } else if (width >= 320 && width < 720) {
    return BreakPoints.sm;
  } else if (width >= 720 && width < 1024) {
    return BreakPoints.md;
  } else if (width >= 1024) {
    return BreakPoints.lg;
  } else {
    return BreakPoints.xl;
  }
};

const useBreakpoint = () => {
  const [breakPoint, setBreakPoint] = useState(() => getBreakPoint(window.innerWidth));

  useEffect(() => {
    const innerWidth = () => setBreakPoint(getBreakPoint(window.innerWidth)); // TODO: Throttle query
    window.addEventListener('resize', innerWidth);
    return () => window.removeEventListener('resize', innerWidth);
  });

  return breakPoint;
};

export default useBreakpoint;
