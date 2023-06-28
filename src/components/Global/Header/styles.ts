import { css, styled } from "styled-components";
import px2vw from "@/utils/px2vw";

interface MenuButtonProps {
   isMenuOpen: boolean,
}

export const HeaderWrapper = styled.header<MenuButtonProps>`
   ${({ isMenuOpen }) => {
      if (isMenuOpen === true) {
         return css`
            position: sticky;
            top: 0;
      `;
      } else {
         return css``;
      }
   }}
`


export const LogoAndLogin = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: ${px2vw(8)};
   background-color: ${props => props.theme.color.secondary_100};

   img {
      width: ${px2vw(322)};
      margin: 0 ${px2vw(74)};
   };

   div {
      display: flex;
      align-items: center;
      gap: ${px2vw(18)};
      margin-right: ${px2vw(50)};
   };
`;


export const DesktopNav = styled.nav`
   display: none;
   justify-content: space-between;
   align-items: center;
   font-size: ${px2vw(20)};
   background-color: ${props => props.theme.color.primary_100};
   padding: ${px2vw(13)};

   .navbar1 {
      margin-left: ${px2vw(134)};
   }

   .navbar2 {
      margin-right: ${px2vw(52)};
   }

   ul {
      display: flex;
      align-items: center;
      list-style: none;
      gap: ${px2vw(32)};
      margin: 0 ${px2vw(32)};
   }

   a {
      text-decoration: none;
      color: ${props => props.theme.color.secondary_80};
   }

   @media(min-width: 768px) {
      display: flex;
   }; 
   
   @media(min-width: 1120px) {
      display: flex;
   }
   `;

export const MobileNav = styled.nav<MenuButtonProps>`
   background-color: ${props => props.theme.color.primary_100};
   width: 100%;
   padding: ${px2vw(32)} 0;

   ul {
      list-style: none;
      height: 100%;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      font-size: 2rem;
      background-color: ${props => props.theme.color.primary_100};
   }

   a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.secondary_80};
   }

   @media(min-width: 375px) {
      ul {
         display: flex;
      }
   };
   @media(min-width: 768px) {
      display: none;
   };

   ${({ isMenuOpen }) => {
      if(isMenuOpen === true) {
         return css`
            ul {
               position: fixed;
            }
         `;
      } else {
         return css`
            ul {
            display: none;
         }
         `
      }
   }}
`;

export const MenuButton = styled.button`
   background: transparent;
   border: 0;
   padding: ${px2vw(8)};
   cursor: pointer;

   &:hover {
      transform: scale(1.05);
   }

   &:active {
      transform: scale(0.95);
   }

   @media(min-width: 375px) {
      display: block;
   }
   @media(min-width: 768px) {
      display: none;
   }
`
