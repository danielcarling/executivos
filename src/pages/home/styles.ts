import px2vw from "@/utils/px2vw";
import { styled } from "styled-components";

import img from '../../../public/banner.png'

interface ContainerProps {
   type: boolean;
}

export const Container = styled.div``;

export const Main = styled.main`
   background-color: ${props => props.theme.color.secondary_80};
`;

export const ContactUs = styled.section`
   display: flex;
   background-color: ${props => props.theme.color.primary_100};
   color: black;
   font-weight: bold;
   margin: 1.5rem 0;
`;

export const ContactUsImage = styled.div`
   min-width: 50%;
   max-width: 50%;
   height: auto;
   background-image: url('https://images.pexels.com/photos/5313169/pexels-photo-5313169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
   background-position: center;
   background-size: cover;
   
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: white;
   text-align: center;

   p {
      line-height: 1.2;
      font-size: 2.5rem;
      padding: 0 ${px2vw(40)};
   }

   span {
      font-size: 1.8rem;
   }
`;

export const StayIn = styled.section`
   background-color: ${props => props.theme.color.primary_100};
   padding: 0 ${px2vw(116)};
   display: flex;
   flex-direction: column;
   
   h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: black;
      margin: ${px2vw(36)} 0 ${px2vw(22)};
   }

   img {
      width: 100%;
      height: auto;
      margin-bottom: ${px2vw(22)};
   }
   div {
      display: flex;
      flex-direction: column;
      width: 100%;
      img {
         width: 100%;
         height: auto;
      }
   }

   @media(min-width: 768px) {
      div {
         flex-direction: row;
         justify-content: space-between;
         img {
            width: 47%
         }
      }
   }
`

export const LogoContainer = styled.div`
   display: flex;
   justify-content: center;
   img {
      width: ${px2vw(732)};
      height: ${px2vw(158)};
      margin: ${px2vw(60)} 0;
   }
`

export const Jobs = styled.section`
   display: flex;
   justify-content: space-between;
   background-color: ${props => props.theme.color.primary_100};
   margin: 0 ${px2vw(96)};
   border-radius: ${px2vw(30)};
   color: black;
   font-size: 1.3rem;

   p {
      font-weight: 400;
      width: ${px2vw(280)};
   }

   @media(min-width: 768px) {
      font-size: 1.5rem;
   }
`

export const OurJobsArt = styled.div`
   img {
      padding:  ${px2vw(16)} ${px2vw(16)} ${px2vw(12)} ${px2vw(16)};
      width: ${px2vw(350)};
      height: ${px2vw(622)};
   }
`

export const ImgSection = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   padding-right: ${px2vw(32)};

   div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
   }

   img {
      width: ${px2vw(581)};
      height: ${px2vw(181)};
   }
`

export const OurCulture = styled.section`
   h2 {      
      font-weight: 700;
      font-size: 2.5rem;
      margin: ${px2vw(80)} 0 ${px2vw(20)} ${px2vw(116)};
   }
`

export const Carousel = styled.div`

`

export const CarouselItem = styled.div`
   img {
      object-fit: cover;
      width: ${px2vw(600)};
      height: ${px2vw(800)};
   }
   min-width: ${px2vw(600)};
   min-height: ${px2vw(800)};

   @media(min-width: 768px) {
      min-width: ${px2vw(302)};
      min-height: ${px2vw(402)};
      img {
         object-fit: cover;
         width: ${px2vw(302)};
         height: ${px2vw(402)};
      }
   }
`

export const Events = styled.section`
   font-weight: bold;
   h2 {
      margin: ${px2vw(74)} 0 ${px2vw(36)} ${px2vw(116)};
      font-size: 2.5rem;
      font-weight: bold;
   }
`;

export const EventsInfo = styled.div`
   display: flex;
   background-color: black;
`

export const EventsImage = styled.div`
   min-width: 50%;
   max-width: 50%;
   height: auto;
   background: 
   linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
   url(https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
   
   background-position: top left;
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: white;
   text-align: center;

   p {
      line-height: 1.2;
      font-size: 2.5rem;
      padding: 0 ${px2vw(40)};
   }
`;

export const Execution = styled.section`
   background-color: ${props => props.theme.color.primary_100};
   h2 {
      position: relative;
      z-index: 1;
      display: inline;
      font-size: 2.5rem;
      font-weight: bold;
      color: black;
      margin: ${px2vw(40)} 0 0 ${px2vw(116)};
   }
   .underline {
      position: relative;
      top: ${px2vw(-25)};
      z-index: 0;
      margin-left: ${px2vw(116)};
      width: ${px2vw(870)};
      height: ${px2vw(35)};
      background-color: white;
   }

   @media(min-width: 768px) {
      .underline {
         width: ${px2vw(652)};
      }
   }
   @media(min-width: 1024px) {
      .underline {
         width: ${px2vw(580)};
         top: ${px2vw(-25)};
         bottom: 20px;
      }
   }
`