import { ContactInput, Form, NameAndPhone } from "./styles";

export default function ContactForm() {
   return (
      <Form>
         <NameAndPhone>
            <ContactInput>
               <label htmlFor="name">NOME</label>
               <input type="text" name="name" id="name" />
            </ContactInput>
            <ContactInput>
               <label htmlFor="phone">TELEFONE</label>
               <input type="text" name="phone" id="phone" />
            </ContactInput>
         </NameAndPhone>

         <ContactInput>
            <label htmlFor="email">SEU MELHOR EMAIL </label>
            <input type="email" name="email" id="email" />
         </ContactInput>
      </Form>
   )
}