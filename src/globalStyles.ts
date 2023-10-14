import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap");

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background-color: ${theme.darkBlue.testimonialsBackground};
      font-family: "Open Sans", sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    button {
      font-family: ${theme.fontFamilyRaleway};
    }

    p {
      color: ${theme.lightGray};
    }
  `
);

export const myTheme = {
  darkBlue: {
    introEmailSingUp: "hsl(217, 28%, 15%)",
    mainBackground: "hsl(218, 28%, 13%)",
    footerBackground: "hsl(216, 53%, 9%)",
    testimonialsBackground: "hsl(219, 30%, 18%)",
  },
  cyan: "hsl(176, 68%, 64%)",
  blue: "hsl(198, 60%, 50%)",
  lightRed: "hsl(0, 100%, 63%)",
  lightGray: "rgba(255, 255, 255, .8)",
  fontFamilyRaleway: `"Raleway", sans-serif`,
} as const;

type MyTheme = typeof myTheme;
declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
