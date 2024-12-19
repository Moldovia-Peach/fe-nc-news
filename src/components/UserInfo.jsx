import React, { useState, useEffect } from "react";
import { getUsers } from "../api";
import { Error } from "./Error";

export function UserInfo({ author }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getUsers()
      .then((data) => {
        const authorInfo = data.find((user) => user.username === author);
        if (authorInfo) {
          setUser(authorInfo);
        } else {
          setError(new Error("Author not found"));
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [author]);

  if (loading) {
    return <p>Loading author information...</p>;
  }

  if (error) {
    return (
      <Error message={error.message || "Failed to load author information"} />
    );
  }

  if (!user) {
    return <Error message="Author not found" />;
  }

  return (
    <div className="author-info">
      <img
        src={user.avatar_url}
        alt={`${user.name} avatar`}
        className="author-avatar"
      />
      <p className="user-name">{user.name}</p>
    </div>
  );
}
