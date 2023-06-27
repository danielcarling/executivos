import { css } from "styled-components";
import { styled } from "styled-components";

interface ButtonProps {
   bgColor: 'yellow' | 'gray',
}

export const Button = styled.a<ButtonProps>`
   text-decoration: none;
   font-weight: 600;
   font-size: 0.75rem;
   border: 1px solid ${props => props.theme.color.primary_100};
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
  `