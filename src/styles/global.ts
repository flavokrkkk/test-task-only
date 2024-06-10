import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
      * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
`;
