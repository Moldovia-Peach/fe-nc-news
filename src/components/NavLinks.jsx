import { Link } from "react-router-dom";

export function NavLinks() {
  return (
    <nav className="nav-links">
      <ul>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/articles" className="nav-link">
            Articles
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/topics" className="nav-link">
            Topics
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
