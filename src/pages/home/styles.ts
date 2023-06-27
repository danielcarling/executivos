import { styled } from "styled-components";

interface ContainerProps {
  type: boolean;
}

export const Container = styled.div``;

export const Main = styled.main``;

export const ContactUs = styled.section`
   display: flex;
   background-color: ${props => props.theme.color.primary_100};
   color: black;
   font-weight: bold;
`

export const ContactUsImage = styled.div`
   min-width: 50%;
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
`
