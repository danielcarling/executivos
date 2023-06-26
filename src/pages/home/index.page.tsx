import Header from "@/src/components/global/Header";
import { Container } from "@/src/styles/pages/app";
import { ContactUs, ContactUsImage, ExecutivosLogo, ImgSection, Jobs, Main, OurJobsArt, StayIn } from "./styles";

import ExecutivosBanner from "@/src/components/global/Banner";
import ContactForm from "@/src/components/page/Home/ContactUs";
import Image from "next/image";

import ventureBuilder from '../../../public/venture-builder.png'
import arte1 from '../../../public/stay-in-arte1.png'
import arte2 from '../../../public/stay-in-arte2.png'

import arteNossosServicos from '../../../public/arte-nossos-servicos.png'
import nossosServicosArte1 from '../../../public/nosso-trabalhos-arte1.png'
import nossosServicosArte2 from '../../../public/nosso-trabalhos-arte2.png'
import nossosServicosArte3 from '../../../public/nosso-trabalhos-arte3.png'

import logoImg from '../../../public/logo.svg'

import { useWindowDimensions } from "@/src/utils/windowWidth";

export default function Home() {
   return (
      <Container>
         {/* <Header /> */}
         <Main>
            {/* <ExecutivosBanner />

            <ContactUs>
               <ContactUsImage>
                  <p>QUER FALAR DIRETAMENTE CONOSCO</p>
                  <span>PREENCHA</span>
               </ContactUsImage>
               <ContactForm />
            </ContactUs>

            <StayIn
               windowSize={useWindowDimensions()}
            >
               <h1>FIQUE POR DENTRO</h1>
               <Image
                  src={ventureBuilder}
                  sizes="100vw"
                  alt=""
               />
               <div>
                  <Image
                     src={arte1}
                     sizes="100vw"
                     alt=""
                  />
                  <Image
                     src={arte2}
                     sizes="100vw"
                     alt=""
                  />
               </div>
            </StayIn>


            <ExecutivosLogo>
               <Image
                  src={logoImg}
                  sizes="100vw"
                  alt=""
               />
            </ExecutivosLogo> */}

            <Jobs>
               <OurJobsArt>
                  <Image
                     src={arteNossosServicos}
                     sizes="100vw"
                     alt=""
                  />
               </OurJobsArt>
               <ImgSection>
                  <div>
                     <p>CRIAÇÃO DE <strong>STARTUPS</strong> OU <strong>EMPRESAS DIGITAIS</strong></p>
                     <Image
                        src={nossosServicosArte1}
                        width={581}
                        height={182}
                        alt=""
                     />
                  </div>
                  <div>
                     <p>DESENVOLVIMENTO DE <strong>APLICATIVOS E SITES</strong></p>
                     <Image
                        src={nossosServicosArte2}
                        width={581}
                        height={182}
                        alt=""
                     />
                  </div>
                  <div>
                     <p>CONSULTORIA</p>
                     <Image
                        src={nossosServicosArte3}
                        width={581}
                        height={182}
                        alt=""
                     />
                  </div>
               </ImgSection>
            </Jobs>
         </Main>
      </Container>
   )
}