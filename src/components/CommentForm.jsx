import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../api";

export function CommentForm({ article_id, setComments }) {
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (body.trim() === "") {
      setError("Please enter a comment.");
      return;
    }

    if (!user) {
      setError("Log in to post a comment.");
      return;
    }

    setError("");

    postComment(article_id, user.username, body)
      .then((newComment) => {
        setComments((prevComments) => [newComment, ...prevComments]);
        setBody("");
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Add your comment here..."
        required
        className="comment-input"
      />
      <button type="submit" className="post-comment">
        Post Comment
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
