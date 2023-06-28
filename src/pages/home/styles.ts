import px2vw from "@/utils/px2vw";
import { styled } from "styled-components";

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
      padding: 0 2.5rem;
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

export const ExecutivosLogo = styled.div`
   display: flex;
   justify-content: center;
   img {
      max-width: ${px2vw(732)};
      max-height: ${px2vw(150)};
      margin: ${px2vw(50)} 0;
   }
`

export const Jobs = styled.section`
   display: flex;
   justify-content: space-between;
   background-color: ${props => props.theme.color.primary_100};
   margin: 0 6rem;
   border-radius: 30;
   font-size: 1.5rem;
   color: black;

   p {
      font-weight: 400;
      max-width: 280px;
   }
`

export const OurJobsArt = styled.div`
   img {
      padding: 1rem 1rem 0.7rem 1rem;
   }
`

export const ImgSection = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   padding-right: 2rem;

   div, footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
   }

   img {
      width: 100%;
   }

   footer {
      max-width: 500px;
      height: auto;
   }
`

export const OurCulture = styled.section`
   h2 {      
      font-weight: 700;
      font-size: 2.5rem;
      margin: ${px2vw(21)} 0 ${px2vw(16)} ${px2vw(116)};
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