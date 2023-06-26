import { Button } from "./styles";

interface Button {
   content: string;
   href: string;
   bgColor: 'gray' | 'yellow';
}

export function LoginButton({ bgColor, href, content }: Button) {
   return (
      <Button
         href={href}
         bgColor={bgColor}
      >
         {content}
      </Button>
   )
}