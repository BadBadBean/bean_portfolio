import { footerbg } from "../assets";

export default function Footer() {
    return (
      <footer>
        {/* <img className="footer-gif" src={fireworks}
        /> */}
        <img  className="w-full h-[60px] object-cover object-top" src={footerbg}
        />
        <p className="text-[12px] xs:text-[16px]">
        Made with ❤️ by <a href="https://github.com/BadBadBean" target="_blank" rel="noopener noreferrer">Bean</a> | 2025
        </p>
      </footer>
    );
  }
