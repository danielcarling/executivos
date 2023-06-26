import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
   
`
// variants: {
//    isMenuOpen: {
//       true: {
//          position: 'sticky',
//          top: 0,
//          width: '100%',
//       },
//       false: {
//       }
//    },
//    windowSize: {
//       bp1: {
//          position: 'initial',
//       },
//       bp2: {
//          position: 'initial',
//       },
//       bp3: {

//       }
//    },
// }


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

   /* variants: {
      windowSize: {
         bp1: {
            
         },
         bp2: {
            
         },
         bp3: {
            div: {
               marginRight: '2rem',
            },

            img: {
               width: '30%',
               margin: '0 1rem'
            }
         }
      },
   } */
`;


export const DesktopNav = styled.nav`
   display: none;
   justify-content: space-between;
   align-items: center;

   background-color: ${props => props.theme.color.primary_100};
   padding: 0.8rem;

   ul {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0 3rem;
   }

   a {
      text-decoration: none;
      color: ${props => props.theme.color.secondary_80};
   }

   /* variants: {
      windowSize: {
         'bp1': {
            a: {
               fontSize: 1.2rem;
            }
         }
         'bp2': {
            a: {
               fontSize: 0.8rem;
            }
         },
         'bp3': {
            display: none;
            a: {
               fontSize: 0.6rem;
            },

            ul: {
               flexDirection: column;
               justifyContent: center;
               alignItems: center;
            }
         }
      }
   } */
   `;

export const MobileNav = styled.nav`
   display: none;

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
`;

/* variants: {
   windowSize: {
      bp1: {
         display: 'none',
      },
      bp2: {
         display: 'none',
      },
      bp3: {
         ul: {
            position: 'fixed',
            display: 'flex',
            backgroundColor: '$yellow',
         }
      }
   },

   isMenuOpen: {
      true: {
         position: 'fixed',
      },
      false: {
         ul: {
            display: 'none',
         }
      }
   }
} */
// `

export const MenuButton = styled.button`
   display: none;
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
`

   // variants: {
   //    windowSize: {
   //       'bp1': {

   //       },
   //       'bp2': {

   //       },
   //       'bp3': {
   //          display: 'block',
   //       }
   //    },
   // },
