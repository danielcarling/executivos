import { styled } from "@stitches/react";
import Link from "next/link";

export const Button = styled(Link, {
   textDecoration: 'none',
   fontSize: '0.75rem',
   border: '1px solid $yellow',
   padding: '0.5rem 1rem',
   borderRadius: 8,

   textAlign: 'center',

   variants: {
      bgColor: {
         'gray': {
            backgroundColor: '$gray900',
            color: '$white',
         },
         'yellow': {
            backgroundColor: '$yellow',
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
   }
})