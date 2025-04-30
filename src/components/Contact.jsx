import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn, textVariant, fadeIn } from "../utils/motion";
import { arrowRight, portrait } from "../assets";
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

      {/* Titre encadré */}
      <div className="w-full">
        <div className="border-8bit-title">
          <motion.div
            variants={textVariant()}
            className="section-title flex items-center gap-6 py-2"
          >
            <div>
              <img
                src={portrait}
                className="max-w-[100px] h-auto object-contain"
                alt="portrait"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="text-left">
                <motion.h2
                  variants={fadeIn("", "", 0.2, 1)}
                  className="text-[32px] sm:text-[40px] text-white font-jersey"
                >
                  Contact.
                </motion.h2>
                <motion.p
                  variants={fadeIn("", "", 0.1, 1)}
                  className="text-flashWhite font-jersey text-[22px]"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                  consectetur nibh. Praesent dictum dui eu porta congue.
                  Vestibulum convallis sagittis purus sit amet interdum.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Formulaire */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="px-6 py-5 lg:max-w-[50%] w-full"
      >
        <form ref={formRef} onSubmit={handleSubmit} className="font-jersey">
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Your Name</label>
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Your Email</label>
          </div>
          <div className="input-group">
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Your message</label>
          </div>

          <div className="relative inline-block sm:w-[138px] w-[100px] sm:mt-[22px] mt-[16px] 
          transition-transform duration-150 ease-in-out active:translate-y-1 active:scale-95">
            <button
              type="submit"
              className="w-full text-center text-white py-1.5 font-jersey text-s
                bg-[#76778b] hover:bg-[#3a8eba]
                active:shadow-[inset_3px_3px_0px_0px_#396e8b]
                hover:shadow-[inset_-4px_-4px_0px_0px_#396e8b]
                shadow-[inset_-3px_-3px_0px_0px_#49484e]
                transition duration-200 ease-in-out transform
                flex items-center justify-center gap-1 h-auto z-20 rounded-md"
              onMouseOver={() => {
                document
                  .querySelector(".contact-btn")
                  .setAttribute("src", sendHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector(".contact-btn")
                  .setAttribute("src", send);
              }}
            >
              {loading ? "Envoi en cours" : "Envoyer"}
              <img
                src={arrowRight}
                alt="Envoyer"
                className="contact-btn sm:w-[24px] sm:h-[24px] w-[22px] h-[22px] object-contain"
              />
            </button>
            {/* Bordures du bouton */}
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
    </section>
  );
};

export default Contact;
