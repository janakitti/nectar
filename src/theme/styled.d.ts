import 'styled-components';

export interface IThemeColors {
  primary0?: string;
  primary1?: string;
  primary2?: string;
  secondary0?: string;
  secondary1?: string;
  secondary2?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors?: IThemeColors;
  }
}
