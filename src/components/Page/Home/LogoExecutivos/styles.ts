import { styled } from "styled-components";
import px2vw from "@/utils/px2vw";

export const LogoContainer = styled.div`
   display: flex;
   justify-content: center;
   img {
      width: ${px2vw(732)};
      height: ${px2vw(158)};
      margin: ${px2vw(60)} 0;
   }
`