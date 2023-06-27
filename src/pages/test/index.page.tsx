import ContactForm from "@/components/Page/Home/ContactUsForm";
import { ContactUs, ContactUsImage } from "../home/styles";


export default function Test() {
   return (
      <ContactUs>
         <ContactUsImage>
            <p>QUER FALAR DIRETAMENTE CONOSCO</p>
            <span>PREENCHA</span>
         </ContactUsImage>
         <ContactForm />
      </ContactUs>
   )
}