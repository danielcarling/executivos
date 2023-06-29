import Header from "@/components/Global/Header";
import ExecutivosBanner from "@/components/Global/Banner";
import ContactForm from "@/components/Page/Home/ContactUsForm";

import { Carousel, CarouselItem, ContactUs, ContactUsImage, Container, Events, EventsImage, EventsInfo, Execution, ImgSection, Jobs, LogoContainer, Main, OurCulture, OurJobsArt, StayIn } from "./styles";

import Image from "next/image";
import logoImg1 from '../../../public/logo1.svg'
import logoImg2 from '../../../public/logo2.svg'
import ventureBuilder from '../../../public/venture-builder.png'
import arte1 from '../../../public/stay-in-arte1.png'
import arte2 from '../../../public/stay-in-arte2.png'
import arteNossosServicos from '../../../public/arte-nossos-servicos.png'
import nossosServicosArte1 from '../../../public/nosso-trabalhos-arte1.png'
import nossosServicosArte2 from '../../../public/nosso-trabalhos-arte2.png'
import nossosServicosArte3 from '../../../public/nosso-trabalhos-arte3.png'

import carrosselArt1 from '../../../public/carrossel1/1.png'
import carrosselArt2 from '../../../public/carrossel1/2.png'
import carrosselArt3 from '../../../public/carrossel1/3.png'
import carrosselArt4 from '../../../public/carrossel1/4.png'

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Home() {
   const [sliderRef] = useKeenSlider({
      slides: {
         perView: "auto",
         spacing: 22,
      }
   })
   return (
      <Container>
         <Header />
         <Main>
            <ExecutivosBanner />

            <ContactUs>
               <ContactUsImage>
                  <p>QUER FALAR DIRETAMENTE CONOSCO</p>
                  <span>PREENCHA</span>
               </ContactUsImage>
               <ContactForm inputColor="black" />
            </ContactUs>

            <StayIn>
               <h2>FIQUE POR DENTRO</h2>
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


            <LogoContainer>
               <Image
                  src={logoImg1}
                  width={732}
                  height={158}
                  alt="Logo Executivos"
               />
            </LogoContainer>

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

            <OurCulture>
               <h2>NOSSA CULTURA</h2>

               <Carousel ref={sliderRef} className="keen-slider">
                  <CarouselItem className="keen-slider__slide">
                     <Image
                        src={carrosselArt1}
                        width={600}
                        height={800}
                        alt=""
                     />
                  </CarouselItem>
                  <CarouselItem className="keen-slider__slide">
                     <Image
                        src={carrosselArt2}
                        width={600}
                        height={800}
                        alt=""
                     />
                  </CarouselItem>
                  <CarouselItem className="keen-slider__slide">
                     <Image
                        src={carrosselArt3}
                        width={600}
                        height={800}
                        alt=""
                     />
                  </CarouselItem>
                  <CarouselItem className="keen-slider__slide">
                     <Image
                        src={carrosselArt4}
                        width={600}
                        height={800}
                        alt=""
                     />
                  </CarouselItem>
                  <CarouselItem className="keen-slider__slide">
                     <Image
                        src={carrosselArt1}
                        width={600}
                        height={800}
                        alt=""
                     />
                  </CarouselItem>
                  <CarouselItem className="keen-slider__slide">
                     <Image
                        src={carrosselArt2}
                        width={600}
                        height={800}
                        alt=""
                     />
                  </CarouselItem>
                  <CarouselItem className="keen-slider__slide">
                     <Image
                        src={carrosselArt3}
                        width={600}
                        height={800}
                        alt=""
                     />
                  </CarouselItem>
                  <CarouselItem className="keen-slider__slide">
                     <Image
                        src={carrosselArt4}
                        width={600}
                        height={800}
                        alt=""
                     />
                  </CarouselItem>
               </Carousel>
            </OurCulture>

            <Events>
               <h2>PRÓXIMOS EVENTOS</h2>
               <EventsInfo>
                  <EventsImage>
                     <p>SE INSCREVA AO LADO E SAIBA DOS EVENTOS PRESENCIAIS E ONLINE</p>
                  </EventsImage>
                  <ContactForm inputColor="yellow" />
               </EventsInfo>
            </Events>

            <Execution>
               <LogoContainer>
                  <Image
                     src={logoImg2}
                     width={732}
                     height={158}
                     alt="Logo Executivos"
                  />
               </LogoContainer>
              <h2>UM POUCO DA NOSSA EXECUÇÃO</h2>
              <div className="underline"/>
               
            </Execution>
         </Main>
      </Container>
   )
}