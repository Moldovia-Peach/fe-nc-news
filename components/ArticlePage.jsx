import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArticleInfo } from "./ArticleInfo";
import { CommentCard } from "./CommentCard";

export function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://my-nc-news-zyxm.onrender.com/api/articles/${article_id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [article_id]);

  useEffect(() => {
    setCommentsLoading(true);
    fetch(
      `https://my-nc-news-zyxm.onrender.com/api/articles/${article_id}/comments`
    )
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
        setCommentsLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
        votes={article.votes}
        comment_count={article.comment_count}
        article_img_url={article.article_img_url}
        body={article.body}
        showImage={true}
      />

      <div className="comments-section">
        <h2 className="comments-heading">Comments</h2>
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
