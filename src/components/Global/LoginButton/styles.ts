import { css } from "styled-components";
import { styled } from "styled-components";
import px2vw from "@/utils/px2vw";

interface ButtonProps {
   bgColor: 'yellow' | 'gray',
}

export const Button = styled.a<ButtonProps>`
   text-decoration: none;
   font-size: 0.75rem;
   border: 1px solid ${props => props.theme.color.primary_100};
   padding: ${px2vw(8)} ${px2vw(18)};
   border-radius: ${px2vw(9)};
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