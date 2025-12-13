import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}>
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then(
  () => {
    setStatus("Message sent successfully!");
    e.target.reset();

    setTimeout(() => {
      setStatus("");
    }, 3000);
  },
  (error) => {
    setStatus("Failed to send message. Please try again later.");
    console.error(error);

    setTimeout(() => {
      setStatus("");
    }, 3000);
  }
);
};

  return (
    <ScrollReveal>
      <div id="contact" className="pt-24 pb-20 min-h-[70vh] w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-5 w-full max-w-2xl px-6">
          <motion.h1
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="text-3xl font-light text-white md:text-5xl">
            Get in Touch
          </motion.h1>

          <p className="text-center text-gray-400 text-md md:text-lg">
            Have a question or want to collaborate? Send me a message and I’ll get back to you as soon as possible.
          </p>

          {status && (
            <p className={`text-center font-medium ${status.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
              {status}
            </p>
          )}

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-1.5 rounded-lg bg-black/70 text-white border border-indigo-600 focus:outline-none focus:border-indigo-400 transition"/>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-1.5 rounded-lg bg-black/70 text-white border border-indigo-600 focus:outline-none focus:border-indigo-400 transition"/>
            <input
              type="text"
              name="title"
              placeholder="Subject"
              required
              className="p-1.5 rounded-lg bg-black/70 text-white border border-indigo-600 focus:outline-none focus:border-indigo-400 transition"/>
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="p-1.5 rounded-lg bg-black/70 text-white border border-indigo-600 focus:outline-none focus:border-indigo-400 transition resize-none"/>
            <button
              type="submit"
              className="bg-indigo-600 px-5 py-1.5 rounded-lg text-white font-bold hover:bg-indigo-500 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Contact;