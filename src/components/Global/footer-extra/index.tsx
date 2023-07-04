import logoImg from '@/../public/logo2.svg'
import Image from 'next/image'
import { FooterContainer } from './styles'

export default function Footer () {
   return(
      <FooterContainer>
         <ul>
            <li>POLÍTICA DE PRIVACIDADE</li>
            <li>TERMOS E CONDIÇÕES</li>
         </ul>
         <div>
            <strong>COPYRIGHTS</strong>
            <strong>EXECUTIVOS NEGÓCIOS DIGITAIS LTDA 2023</strong>
         </div>
         <Image 
            src={logoImg}
            width={416}
            height={83}
            alt='Executivos logo'
         />
      </FooterContainer>
   )
}