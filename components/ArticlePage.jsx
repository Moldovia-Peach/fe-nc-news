import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArticleInfo } from "./ArticleInfo";
import { CommentCard } from "./CommentCard";
import { VotingCard } from "./VotingCard";
import { getArticleById, getCommentsByArticleId } from "../src/api";

export function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setVotes(articleData.votes);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  useEffect(() => {
    setCommentsLoading(true);
    getCommentsByArticleId(article_id)
      .then((commentsData) => {
        setComments(commentsData);
        setCommentsLoading(false);
      })
      .catch(() => {
        setCommentsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading NC News article...</p>;
  }

  if (commentsLoading) {
    return <p>Loading comments...</p>;
  }

  return (
    <div className="article-page">
      <ArticleInfo
        title={article.title}
        author={article.author}
        created_at={article.created_at}
        topic={article.topic}
        votes={votes}
        comment_count={article.comment_count}
        article_img_url={article.article_img_url}
        body={article.body}
        showImage={true}
      />
      <VotingCard
        article_id={article_id}
        initialVotes={votes}
        setVotes={setVotes}
      />

      <div className="comments-section">
        <h3 className="comments-heading">Comments</h3>
        <p>Join the conversation below.</p>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))
        ) : (
          <p>No comments yet. Be the first to share your thoughts below!</p>
        )}
      </div>
    </div>
  );
}
