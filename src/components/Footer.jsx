import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="logo-social">
        <Logo />
        <SocialIcons />
      </div>

      <div className="footer-links">
        <h4>Important Links</h4>
        <Link to="/">Homepage</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p className="copyright">
        <FaRegCopyright /> 2024 NC News. All rights reserved.
      </p>
    </footer>
  );
}
