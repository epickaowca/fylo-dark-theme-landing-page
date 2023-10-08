import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background-color: ${theme.darkBlue.mainBackground};
    }
  `
);

export const myTheme = {
  color1: "#2d2",
  darkBlue: {
    introEmailSingUp: "hsl(217, 28%, 15%)",
    mainBackground: "hsl(218, 28%, 13%)",
    footerBackground: "hsl(216, 53%, 9%)",
    testimonialsBackground: "hsl(219, 30%, 18%)",
  },
  cyan: "hsl(176, 68%, 64%)",
  blue: "hsl(198, 60%, 50%)",
  lightRed: "hsl(0, 100%, 63%)",
} as const;

type MyTheme = typeof myTheme;
declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
