import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
   font-weight: 600;
   line-height: 1.6;
  };
  
  body, input, textarea, button {
   font-family: 'Barlow', sans-serif;
   color: white;
}
`;

export default GlobalStyle;
