import Header from "@/components/Global/Header";
import { ContactForm, Container, ForCompanies, Main, ResponsiveIframe } from "./styles";
import ExecutivosBanner from "@/components/Global/Banner";

export default function LPCompanies() {
   return (
      <Container>
         <Header />
         <Main>
            <ExecutivosBanner />
            <ForCompanies>
               <h1>PARA EMPRESAS</h1>
               <ResponsiveIframe>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/RI8L-TOHVlM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
               </ResponsiveIframe>
            </ForCompanies>
            <ContactForm>
               <h2>QUER FALAR DIRETAMENTE CONOSCO?</h2>
               <h2>INSIRA SEUS DADOS:</h2>
               <div>
                  <label htmlFor="name">NOME</label>
                  <input type="text" name="name" id="name" />
               </div>
               <div>
                  <label htmlFor="phoneNumber">TELEFONE</label>
                  <input type="tel" name="phoneNumber" id="phoneNumber" />
               </div>
               <div>
                  <label htmlFor="email">SEU MELHOR EMAIL</label>
                  <input type="email" name="email" id="email" />
               </div>
            </ContactForm>
         </Main>
      </Container>
   )
}