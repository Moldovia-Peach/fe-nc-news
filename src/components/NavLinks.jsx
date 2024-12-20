import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function NavLinks() {
  const { user, logout } = useContext(UserContext);

  const anonymousAvatar =
    "https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png";

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
        {user ? (
          <div className="profile-info">
            <li className="profile-nav-item">
              <Link to="/profile" className="nav-link">
                <img
                  src={user.avatar_url || anonymousAvatar}
                  alt="User Avatar"
                  className="profile-avatar"
                />
              </Link>
            </li>
            <li className="nav-item">
              <button className="log-out-button" onClick={logout}>
                Log Out
              </button>
            </li>
          </div>
        ) : (
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Log In
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
