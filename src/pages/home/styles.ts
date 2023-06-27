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
   width: 50%;
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
   }

   @media(min-width: 375px) {
      p {
         font-size: 1.2rem;
      }
      span {
         font-size: 1rem;
      }
   }
   
   @media(min-width: 375px) {
      p {
         font-size: 1.7rem;
      }
      span {
         font-size: 1.3rem;
      }
   }
   
   @media(min-width: 1120px) {
      p {
         font-size: 2.3rem;
      }
      span {
         font-size: 1.5rem;
      }
   }
`;

export const StayIn = styled.section`
   background-color: ${props => props.theme.color.primary_100};
   color: black;
   margin-top: 1rem;

   h1 {
      padding: 0 1rem;
      font-weight: 700;
   };

   img {
      width: 100%;
      height: auto;
      padding: 0.4rem 1rem;
   };

   div {
      display: flex;
   }

   @media(min-width: 375px) {
      padding: .5rem;
      h1 {
         font-size: 1.5rem;
      };
      div {
         flex-direction: column;
      }
   };

   @media(min-width: 768px) {
      padding: 1.2rem;
      h1 {
         font-size: 2rem;
      };
      div {
         flex-direction: row;
      }
   }

   @media(min-width: 1120px) {
      padding: 2rem;
      h1 {
         font-size: 2.5rem;
      };
      div {
         flex-direction: row;
      }
   }
`

export const ExecutivosLogo = styled.div`
   display: flex;
   justify-content: center;

   @media(min-width: 375px) {
      img {
         margin: 0;
         width: 250px;
      }
   }

   @media(min-width: 768px) {
      img {
         margin: 1rem;
         width: 350px;
      }
   }
   @media(min-width: 1120px) {
      img {
         margin: 2.5rem;
         width: 500px;
      }
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
      font-size: 2.5rem;
      font-weight: 700;
   }
`

export const Carousel = styled.div`
   padding-left: 5rem;
`