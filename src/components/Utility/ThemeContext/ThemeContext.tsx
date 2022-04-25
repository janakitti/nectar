import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../../theme/theme';

export interface IThemeContextProps {
  theme: DefaultTheme;
  children: React.ReactNode;
}

const ThemeContext = (props: IThemeContextProps) => {
  // Start with default theme as baseline and overwrite with custom theme object
  const modifiedTheme = { ...defaultTheme, ...props.theme };

  return <ThemeProvider theme={modifiedTheme}>{props.children}</ThemeProvider>;
};

export default ThemeContext;
