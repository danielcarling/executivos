import { styled } from "styled-components";
import px2vw from "@/utils/px2vw";

export const Container = styled.div``;

export const Main = styled.main`
  background-color: ${(props) => props.theme.color.secondary_80};
`;

export const ForCompanies = styled.section`
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.color.primary_100};
    margin: ${px2vw(24)} 0 ${px2vw(46)} ${px2vw(60)};
  }
  h2 {
   display: flex;
   justify-content: center;
  }
`;

export const ResponsiveIframe = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  margin: 0 auto;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: ${px2vw(796)};
    padding-top: ${px2vw(403)};
    iframe {
      height: ${px2vw(402)};
    }
  }
`;

export const ContactForm = styled.section`
   background-color: ${props => props.theme.color.primary_100};
   color: black;
`
