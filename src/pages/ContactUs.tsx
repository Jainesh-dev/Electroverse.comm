import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formRef.current!,
      "YOUR_PUBLIC_KEY"
    ).then(() => {
      setSuccess(true);
      formRef.current?.reset();
    });
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h1>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4"
        >
          <input
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-white/5 border border-white/10"
          />

          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-white/5 border border-white/10"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full p-3 rounded bg-white/5 border border-white/10"
          />

          <button
            type="submit"
            className="w-full py-3 rounded bg-purple-600 hover:bg-purple-700"
          >
            Send Message
          </button>
        </form>

        {success && (
          <p className="text-green-400 text-center mt-4">
            Message Sent Successfully ✅
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
