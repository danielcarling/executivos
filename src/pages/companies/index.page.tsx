import Header from "@/components/Global/Header";
import { Container, Main } from "./styles";
import ExecutivosBanner from "@/components/Global/Banner";

export default function LPCompanies() {
   return(
      <Container>
         <Header />
         <Main>
            <ExecutivosBanner />
            <section>
               <h1>PARA EMPRESAS</h1>
               <div style="position: relative; padding-bottom: 56.25%; /* proporção de aspecto de 16:9 */ padding-top: 30px; height: 0; overflow: hidden;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/RI8L-TOHVlM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

            </section>
         </Main>
      </Container>
   )
}