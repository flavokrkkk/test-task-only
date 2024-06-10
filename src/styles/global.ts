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
    background-color: #F4F5F9;
   font-family: PT Sans, sans-serif;
  }


  h1 {
    color: #42567A;
  }
  
`;
