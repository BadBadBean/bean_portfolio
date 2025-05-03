import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn, textVariant, fadeIn } from "../utils/motion";
import { arrowRightWhite, portrait } from "../assets";
import SectionArrow from "./SectionArrow";
import SectionHeader from "./SectionHeader";

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
    <motion.section
      id="contact"
      className="relative sxm:px-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Titre */}
      <SectionHeader
  title="Contact"
  description="N'hésitez pas à venir me parler de vos projets !"
  imgSrc={portrait}
  imgPosition="left"
  imgAlt=""
  className="mb-10"
/>

      {/* Formulaire */}
      <motion.div
        variants={slideIn("left", "tween", 0.4, 1)}
        className="xmd:px-6 xmd:py-5 xl:max-w-[50%] w-full"
      >
        <form ref={formRef} onSubmit={handleSubmit} className="font-jersey">
          <div className="input-group">
            <input
            id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="name">Votre Nom</label>
          </div>
          <div className="input-group">
            <input
                id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="email">Votre e-mail</label>
          </div>
          <div className="input-group">
            <textarea
              rows="5"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder=" "
              className="h-24 sm:h-40 md:h-48"
            />
            <label htmlFor="message">Votre message</label>
          </div>

          {/* Bouton d’envoi */}
          <div className="relative inline-block sm:w-[138px] w-[100px] sm:mt-[22px] mt-[16px] 
          transition-transform duration-150 ease-in-out active:translate-y-1 active:scale-95">
            <button
              type="submit"
              className="w-full text-center text-white py-1.5 font-jersey text-[16px] sm:text-[20px]
                bg-[#575766] hover:bg-[#3a8eba]
                active:shadow-[inset_3px_3px_0px_0px_#396e8b]
                hover:shadow-[inset_-4px_-4px_0px_0px_#396e8b]
                shadow-[inset_-3px_-3px_0px_0px_#34343d]
                transition duration-200 ease-in-out transform
                flex items-center justify-center gap-1 h-auto z-20 rounded-md"
            >
              {loading ? "Envoi en cours" : "Envoyer"}
              <img
                src={arrowRightWhite}
                alt="Envoyer"
                className="contact-btn w-[18px] h-[18px] object-contain"
              />
            </button>

            {/* Bordures bouton */}
            {["top", "bottom"].map((pos) => (
              <div
                key={pos}
                className={`absolute ${
                  pos === "top" ? "top-[-4px]" : "bottom-[-4px]"
                } left-0 right-0 h-[4px] bg-black pointer-events-none`}
              />
            ))}
            {["left", "right"].map((pos) => (
              <div
                key={pos}
                className={`absolute ${
                  pos === "left" ? "left-[-4px]" : "right-[-4px]"
                } top-0 bottom-0 w-[4px] bg-black pointer-events-none`}
              />
            ))}
          </div>
        </form>
      </motion.div>

      <SectionArrow targetId="hero" direction="up" />
    </motion.section>
  );
};

export default Contact;
