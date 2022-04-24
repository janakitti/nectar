import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ITheme } from '../../../shared/PropTypes';

export interface IThemeContextProps {
  theme: DefaultTheme;
  children: React.ReactNode;
}

const ThemeContext = (props: IThemeContextProps) => {
  return <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>;
};

export default ThemeContext;
