import { footerbg, fireworks } from "../assets";

export default function Footer() {
    return (
      <footer>
        <img className="footer-gif" src={fireworks}
        />
        <img src={footerbg}
        />
        <p>
        Made with ❤️ by <a href="https://github.com/BadBadBean" target="_blank" rel="noopener noreferrer">Bean</a> | 2025
        </p>
      </footer>
    );
  }
