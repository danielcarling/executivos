import Image from 'next/image'
import banner from '../../../../public/banner.png'
import { BannerWrapper } from './styles'

export default function ExecutivosBanner() {
   return (
      <BannerWrapper>
         <Image
            src={banner}
            width={1440}
            height={500}
            alt=""
         />
      </BannerWrapper>
   )
}