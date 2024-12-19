import { CommentCard } from "./CommentCard";

export function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return <p>No comments yet. Be the first to share your thoughts below!</p>;
  }

  return (
    <div className="comments-section">
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
}
