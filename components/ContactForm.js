import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_1mfqiqg";
const TEMPLATE_ID = "template_0u9gtvc";
const USER_ID = "O4ZJEJfXv_u99-5Dm"; // EmailJS public key

const ContactForm = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID);
      alert("Mesajul a fost trimis! Verificați email-ul pentru confirmare.");
      form.current.reset();
    } catch (error) {
      alert("A apărut o eroare. Încercați din nou.");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Nume" required />
      <input type="email" name="user_email" placeholder="Email" required />
      <textarea name="message" placeholder="Mesaj" required />
      <button type="submit">Trimite</button>
    </form>
  );
};

export default ContactForm;