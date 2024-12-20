import React, { useState } from "react";
import { deleteComment } from "../api";

export function DeleteComment({ comment_id, setComments }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = () => {
    setIsDeleting(true);
    deleteComment(comment_id)
      .then(() => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.comment_id !== comment_id)
        );
      })
      .catch((err) => {
        setError("Failed to delete your comment. Please try again later.");
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <div className="delete-button">
      <button
        className="delete-comment-btn"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
