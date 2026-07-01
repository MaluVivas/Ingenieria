import { useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  title: string;
  description: string;
}

export default function ContactForms({ title, description }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("Sending message...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.log("STATUS:", error.status);
        console.log("TEXT:", error.text);
        console.log("FULL ERROR:", error);

  setStatus("Something went wrong. Please try again.");
});
  };

  return (
    <div className="contact-form-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Phone Number</label>
        <input type="tel" name="user_phone" required />

        <label>Your problem</label>
        <textarea name="message" required />

        <button type="submit">Send</button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
}