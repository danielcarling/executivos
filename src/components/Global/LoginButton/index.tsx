import { useWindowDimensions } from "@/src/utils/windowWidth";
import { Button } from "./styles";

interface Button {
   content: string;
   href: string;
   bgColor: 'gray' | 'yellow';
}

export default function LoginButton({ content, href, bgColor }: Button) {
   return (
      <Button
         href={href}
         bgColor={bgColor}
         windosSize={useWindowDimensions()}
      >
         {content}
      </Button>
   )
}