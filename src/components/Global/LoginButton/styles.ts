import { css } from "styled-components";
import { styled } from "styled-components";

interface ButtonProps {
   bgColor: 'yellow' | 'gray',
}

export const Button = styled.a<ButtonProps>`
   text-decoration: none;
   font-size: 0.75rem;
   border: 1px solid #ffff44;
   padding: 0.5rem 1rem;
   border-radius: 8px;
   text-align: center;

   ${({ bgColor, theme }) => {
    if (bgColor === "yellow") {
      return css`
        background-color: ${theme.color.primary_100};
        color: black;
      `;
    } else if (bgColor === "gray") {
      return css`
        background-color: ${theme.color.secondary_100};
        color: white;
      `;
    }
  }}

   /* background-color: ${(props: ButtonProps) =>
      props.bgColor === 'yellow' ? '#ffff44' : '#0e0e0e'
   };
   
   color: ${(props: ButtonProps) => 
      props.bgColor === 'yellow' ? 'black' : 'white'
   };

   @media(min-width: 768px) {
      scale: 0.8;
   } */
   `

/* variants: {
   bgColor: {
      'gray': {
         backgroundColor: '$secondary_100',
         color: 'white',
      },
      'yellow': {
         backgroundColor: 'primary_100',
         color: '$black',
      }
   },
   windosSize: {
      bp1: {

      },
      bp2: {

      },
      bp3: {
         scale: 0.8,
      }
   }
} */
