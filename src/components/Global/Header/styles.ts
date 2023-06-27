import { css, styled } from "styled-components";

interface MenuButtonProps {
   isMenuOpen: boolean,
}

export const HeaderWrapper = styled.header<MenuButtonProps>`
   ${({ isMenuOpen }) => {
      if (isMenuOpen === true) {
         return css`
            position: sticky;
            top: 0;
            width: 100%;
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
   padding: 0.5rem;
   background-color: ${props => props.theme.color.secondary_100};

   img {
      width: 120px;
      margin: 0 1rem;
   };

   div {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-right: 2rem;

      a {
         font-size: 0.5rem;
      }
   };

   @media(min-width: 768px) {
      div {
         margin-right: 2rem;

         a {
            font-size: 0.8rem;
         }
      };

      img {
         width: 322px;
         margin-left: 4rem;
      };
   }
`;


export const DesktopNav = styled.nav`
   justify-content: space-between;
   align-items: center;

   background-color: ${props => props.theme.color.primary_100};
   padding: 0.8rem;

   ul {
      display: flex;
      align-items: center;
      list-style: none;
   }

   a {
      text-decoration: none;
      color: ${props => props.theme.color.secondary_80};
   }

   @media(min-width: 375px) {
      display: none;
   };

   @media(min-width: 768px) {
      display: flex;
      font-size: 0.8rem;
      ul {
         gap: 1.5rem;
         margin: 0 0.5rem;
      }
   };
   
   @media(min-width: 1120px) {
      display: flex;
      font-size: 1.1rem;
      ul{
         gap: 2rem;
         margin: 0 2rem;
      }
   }
   `;

export const MobileNav = styled.nav<MenuButtonProps>`
   background-color: ${props => props.theme.color.primary_100};
   width: 100%;
   padding: 0.5rem 0;

   ul {
      list-style: none;
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
   }

   a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.secondary_80};
   }

   @media(min-width: 375px) {
      ul {
         position: fixed;
         display: flex;
         background-color: ${props => props.theme.color.primary_100};
      }
   };
   @media(min-width: 768px) {
      display: none;
   };
   @media(min-width: 1120px) {
      display: none;
   }

   ${({ isMenuOpen }) => {
      if(isMenuOpen === true) {
         return css`
            position: fixed;
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
   padding: 0.5rem;
   cursor: pointer;

   &:hover {
      transform: scale(1.10);
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
   @media(min-width: 1120px) {
      display: none;
   }
`
