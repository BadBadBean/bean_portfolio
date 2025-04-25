import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn, textVariant, fadeIn } from "../utils/motion";
import { send, sendHover, portrait } from "../assets";
import SectionArrow from "./SectionArrow";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci ! Je vous répondrai dès que possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS error:", error);
          alert(`Une erreur est survenue : ${error.text}`);
        }
      );
  };

  return (
    <section id="contact" className="relative sm:px-12">
      {/* Titre encadré style 8-bit */}
      <div className="w-full">
        <div className="border-8bit-title">
          <motion.div
            variants={textVariant()}
            className="section-title flex items-center gap-6 py-2"
          >
            {/* Image à gauche */}
            <div>
              <img
                src={portrait}
                className="max-w-[100px] h-auto object-contain"
                alt="portrait"
              />
            </div>

            {/* Texte centré */}
            <div className="flex-1 flex justify-center">
              <div className="text-left">
                <motion.p
                  variants={fadeIn("", "", 0.1, 1)}
                  className="text-flashWhite font-jersey text-[22px]"
                >
                  Écrivez-moi
                </motion.p>
                <motion.h2
                  variants={fadeIn("", "", 0.2, 1)}
                  className="text-[32px] sm:text-[40px] text-white font-jersey"
                >
                  Contact.
                </motion.h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Formulaire */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-jet px-6 py-5 rounded-xl max-w-[500px] w-full"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2">Nom</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              className="bg-eerieBlack py-3 px-4 placeholder:text-taupe text-timberWolf 
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2">
              Adresse e-mail
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Entrez votre adresse e-mail"
              className="bg-eerieBlack py-3 px-4 placeholder:text-taupe text-timberWolf 
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2">Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message"
              className="bg-eerieBlack py-3 px-4 placeholder:text-taupe text-timberWolf 
              rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex items-center justify-center gap-3
            text-[16px] sm:text-[18px] text-timberWolf font-bold font-beckman 
            py-3 px-5 rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out w-fit self-center"
            onMouseOver={() => {
              document
                .querySelector(".contact-btn")
                .setAttribute("src", sendHover);
            }}
            onMouseOut={() => {
              document.querySelector(".contact-btn").setAttribute("src", send);
            }}
          >
            {loading ? "Envoi en cours" : "Envoyer"}
            <img
              src={send}
              alt="Envoyer"
              className="contact-btn sm:w-[24px] sm:h-[24px] w-[22px] h-[22px] object-contain"
            />
          </button>
        </form>
      </motion.div>
      <SectionArrow targetId="hero" direction="up" />
      </section>
  );
};

export default Contact;
