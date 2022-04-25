import 'styled-components';

export interface IThemeColors {
  primary0?: string;
  primary1?: string;
  primary2?: string;
  secondary0?: string;
  secondary1?: string;
  secondary2?: string;
  warn0?: string;
  warn1?: string;
  warn2?: string;
  error0?: string;
  error1?: string;
  error2?: string;
  success0?: string;
  success1?: string;
  success2?: string;
  disabled?: string;
  black?: string;
  white?: string;
  light0?: string;
  light1?: string;
  light2?: string;
  dark0?: string;
  dark1?: string;
  dark2?: string;
}

export interface IThemeContainers {
  borderWidth?: number;
  borderRadius?: number;
  dropShadow?: {
    hOffset: number;
    vOffset: number;
    blur: number;
    spread: number;
    color: string;
  };
  padding?: number;
  fieldPadding?: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors?: IThemeColors;
    containers?: IThemeContainers;
    transitions?: {
      hover?: number;
    };
  }
}
