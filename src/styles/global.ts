import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    /* background: white; */
  };

  body {
   background-color: ${props => props.theme.color.secondary_80};
   line-height: 1.6;
  };
  
  body, input, textarea, button {
   font-family: 'Barlow', sans-serif;
   font-weight: 600;
   color: white;
}
`;

export default GlobalStyle;
