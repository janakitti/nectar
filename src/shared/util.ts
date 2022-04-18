import { BreakPoints, IBreakPoints } from './PropTypes';

export const getValueAtBreakpoint = (bp: BreakPoints, d: number, bpMap?: IBreakPoints) => {
  if (!bpMap) {
    return undefined;
  }

  let val = d;
  val = bpMap.xl ? bpMap.xl : val;
  if (bp == BreakPoints.xl) {
    return val;
  }
  val = bpMap.lg ? bpMap.lg : val;
  if (bp == BreakPoints.lg) {
    return val;
  }
  val = bpMap.md ? bpMap.md : val;
  if (bp == BreakPoints.md) {
    return val;
  }
  val = bpMap.sm ? bpMap.sm : val;
  if (bp == BreakPoints.sm) {
    return val;
  }
  val = bpMap.xs ? bpMap.xs : val;
  return val;
};
