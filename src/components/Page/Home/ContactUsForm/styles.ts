import { css, styled } from "styled-components";
import px2vw from "@/utils/px2vw";

interface FormProps {
   inputColor: 'yellow' | 'black',
}

export const Form = styled.form<FormProps>`
   margin: auto;
   padding: ${px2vw(50)};
   font-size: 1.5rem;
   input {
      font-weight: 700;
      font-size: 1.5rem;
      border-radius: ${px2vw(12)};
   }

   ${({ inputColor }) => {
      if(inputColor === 'black') {
         return css`
            background-color: ${props => props.theme.color.primary_100};
            color: black;
            input {
               background-color: black;
               color: ${props => props.theme.color.primary_100};
               &:-webkit-autofill,
               &:-webkit-autofill:hover,
               &:-webkit-autofill:focus {
                  -webkit-text-fill-color: ${props => props.theme.color.primary_100};
                  -webkit-box-shadow: 0 0 0px 1000px #000 inset;
               }
            }
      `} else if(inputColor === 'yellow') {
         return css`
            background-color: black;
            color: ${props => props.theme.color.primary_100};
            input {
               background-color: ${props => props.theme.color.primary_100};
               color: ${props => props.theme.color.primary_100};
               &:-webkit-autofill,
               &:-webkit-autofill:hover,
               &:-webkit-autofill:focus {
                  -webkit-text-fill-color: black;
                  -webkit-box-shadow: 0 0 0px 1000px #ffff44 inset;
            }
         ` 
      }
      
   }}
`

export const NameAndPhone = styled.div`
   display: flex;
   flex-direction: column;

   @media(min-width: 768px) {
      gap: ${px2vw(30)};
      flex-direction: row;
   }
`

export const ContactInput = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: ${px2vw(30)};

   input {
      width: 100%;
      padding: ${px2vw(4)};
      border-radius: ${px2vw(12)};
   }
`