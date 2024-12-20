import React, { useContext } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { UserContext } from "../contexts/UserContext";
import { DeleteComment } from "./DeleteComment";

export function CommentCard({ comment, setComments }) {
  const { author, body, created_at, votes, comment_id } = comment;
  const { user } = useContext(UserContext);

  const formattedDate = new Date(created_at).toLocaleDateString("en-GB");

  return (
    <div className="comment-card">
      <p className="comment-author">
        <b>{author}</b>
      </p>
      <p className="comment-date">{formattedDate}</p>
      <p className="comment-body">{body}</p>
      <p className="comment-votes">
        <FaRegThumbsUp className="thumbs-up-vote" />
        <b> {votes} </b>
        <FaRegThumbsDown className="thumbs-down-vote" />
      </p>
      {author === user?.username && (
        <DeleteComment comment_id={comment_id} setComments={setComments} />
      )}
    </div>
  );
}
