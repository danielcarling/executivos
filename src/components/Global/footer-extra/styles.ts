import { styled } from "styled-components";
import px2vw from "@/utils/size";

export const FooterContainer = styled.footer`
   background-color: ${props => props.theme.color.primary_80};
   display: flex;
   
   justify-content: space-between;
   align-items: center;
   padding: ${px2vw(36)} 0;
   line-height: ${px2vw(34)};

   ul {
      width: ${px2vw(416)};
      font-size: 1rem;
      font-weight: 400;
   }
   div {
      width: ${px2vw(416)};
      margin-left: ${px2vw(64)};
      strong {
         display: block;
         text-align: center;
      }
   }

   img {
      width: ${px2vw(416)};
      height: ${px2vw(83)};
      margin-right: ${px2vw(64)};
   }
`