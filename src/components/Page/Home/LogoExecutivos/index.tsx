import Image from "next/image"
import LogoImg from '../../../../../public/logo.svg'
import { LogoContainer } from "./styles"

export default function Logo() {
   return (
      <LogoContainer>
         <Image
            src={LogoImg}
            width={732}
            height={158}
            alt="Logo Executivos"
         />
      </LogoContainer>
   )
}