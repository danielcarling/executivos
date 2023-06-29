import px2vw from "@/utils/px2vw";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }

  body {
   font-weight: 600;
   line-height: 1.6;
  };
  
   body, input, textarea, button {
      font-family: 'Barlow', sans-serif;
   }
`;

export default GlobalStyle;
