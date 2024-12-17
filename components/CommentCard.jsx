import React from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

export function CommentCard({ comment }) {
  const { author, body, created_at, votes } = comment;

  const formattedDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="comment-card">
      <p className="comment-author">
        <b>{author}</b>
      </p>
      <p className="comment-date">{formattedDate}</p>
      <p className="comment-body">{body}</p>
      <p className="comment-votes">
        <FaRegThumbsUp /> <b>{votes}</b> <FaRegThumbsDown />
      </p>
    </div>
  );
}
