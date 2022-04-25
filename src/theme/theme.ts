import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    primary0: '#e1bd00',
    primary1: '#c8a800',
    primary2: '#c8a800',
    white: '#ffffff',
    light0: '#f6f6f6',
    light1: '#ececec',
    light2: '#d7d7d7',
  },
  containers: {
    padding: 1,
    fieldPadding: 0.35,
    borderRadius: 0.25,
    borderWidth: 0.16,
    dropShadow: {
      hOffset: 0,
      vOffset: 4,
      blur: 20,
      spread: 0,
      color: '#000000',
    },
  },
  transitions: {
    hover: 0.15,
  },
};
