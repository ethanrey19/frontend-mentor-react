import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isDarkBackground = location.pathname === "/sociallinks";

  return (
    <footer
      className="footer"
      style={{ color: isDarkBackground ? "#fff" : undefined }}
    >
      <p className="footer-text">
        Challenges by{" "}
        <a
          href="https://www.frontendmentor.io/profile/ethanrey19"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/ethanreynolds119/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ethan Reynolds
        </a>
        . View source code on{" "}
        <a
          href="https://github.com/ethanrey19/frontend-mentor"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;