import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CommentCard } from "./CommentCard";
import { VotingCard } from "./VotingCard";
import { Error } from "./Error";
import { getArticleById, getCommentsByArticleId } from "../api";
import { UserContext } from "../contexts/UserContext";
import { CommentForm } from "./CommentForm";
import { UserInfo } from "./UserInfo";

export function ArticlePage() {
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    Promise.all([
      getArticleById(article_id),
      getCommentsByArticleId(article_id),
    ])
      .then(([articleData, commentsData]) => {
        if (!articleData) {
          throw new Error("Article not found");
        }
        setArticle(articleData);
        setComments(commentsData);
        setVotes(articleData.votes);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
        setCommentsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading NC News article...</p>;
  }

  if (error) {
    return <Error message={error.message || "An unexpected error occurred."} />;
  }

  if (commentsLoading) {
    return <p>Loading comments...</p>;
  }

  const formattedDate = new Date(article.created_at).toLocaleDateString(
    "en-GB"
  );

  return (
    <div className="article-page">
      <h4 className="article-topic-styling">{article.topic}</h4>
      <h2 className="article-title">{article.title}</h2>
      {article.article_img_url && (
        <img
          src={article.article_img_url}
          alt={article.title}
          className="article-page-image"
        />
      )}
      <UserInfo author={article.author} />
      <p className="published-date">{formattedDate}</p>
      <hr />
      <p className="article-body">{article.body}</p>
      <VotingCard
        article_id={article_id}
        initialVotes={votes}
        setVotes={setVotes}
      />

      <div className="comments-section">
        <h3 className="comments-heading">Comments</h3>
        {user ? (
          <CommentForm article_id={article_id} setComments={setComments} />
        ) : (
          <p>Please log in to post a comment.</p>
        )}

        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              setComments={setComments}
            />
          ))
        ) : (
          <p>No comments yet. Be the first to share your thoughts below!</p>
        )}
      </div>
    </div>
  );
}
