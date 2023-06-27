import { styled } from "styled-components";

export const Form = styled.form`
   height: 100%;
   margin: auto;
   padding: 2rem;

   input {
      
   }

   @media(min-width: 375px) {
      padding: 1rem;
      font-size: .8rem;
      input {
         padding: 0;
         font-size: 0.6rem;
         border-radius: 6px;
      }
   }

   @media(min-width: 768px) {
      padding: 2rem 0;
      font-size: 0.8rem;
      input {
         font-size: 0.8rem;
         padding: .5rem;
      }
   }

   @media(min-width: 1120px) {
      padding: 2rem 0;
      font-size: 1rem;
      input {
         font-size: 1rem;
         padding: 1rem;
      }
   }
`

export const NameAndPhone = styled.div`
   display: flex;

   @media(min-width: 375px) {
      flex-direction: column;
      gap: 0;
   }

   @media(min-width: 768px) {
      flex-direction: row;
      gap: 1rem;
   }

   @media(min-width: 1120px) {
      flex-direction: row;
      gap: 1rem;
   }
`

export const ContactInput = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: .4rem;

   input {
      width: 100%;
      padding: .2rem;
      border-radius: 8px;
      background-color: black;
      color: ${props => props.theme.color.primary_100};

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
         -webkit-text-fill-color: ${props => props.theme.color.primary_100};
         -webkit-box-shadow: 0 0 0px 1000px #000 inset;
      }
   }
`