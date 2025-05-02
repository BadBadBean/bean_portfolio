import { footerbg } from "../assets";

export default function Footer() {
    return (
      <footer className="font-jersey">
        <img  className="w-full h-[60px] object-cover object-top" src={footerbg}
        />
        <p className="text-[14px] xs:text-[18px]">
        Made with ❤️ by <a href="https://github.com/BadBadBean" target="_blank" rel="noopener noreferrer">Bean</a> | 2025
        </p>
      </footer>
    );
  }
