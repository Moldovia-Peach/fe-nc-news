import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../api";
import { UserContext } from "../contexts/UserContext";
import { SocialIcons } from "./SocialIcons";

export function LogInPage() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    getUsers()
      .then((users) => {
        const user = users.find((user) => user.username === username);

        if (user) {
          login(user);
          navigate("/");
        } else {
          setError("User not found");
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Type your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p>Or sign up using:</p>
        <SocialIcons />
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
