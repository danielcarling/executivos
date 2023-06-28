import { styled } from "styled-components";
import px2vw from "@/utils/px2vw";

export const BannerWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin: 0 ${px2vw(32)};

   img {
      max-width: 100%;
      height: auto;
      margin-top: 0.2rem;
   }
   `