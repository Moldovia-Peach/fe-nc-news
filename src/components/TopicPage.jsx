import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../api";
import { Error } from "./Error";

export function TopicPage() {
  const { topicSlug } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getArticlesByTopic(topicSlug)
      .then((data) => {
        setArticles(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [topicSlug]);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <Error message={error.message || "Failed to load articles."} />;
  }

  return (
    <div className="topic-page">
      <h2>Topic: {topicSlug}</h2>
      {articles.length === 0 ? (
        <p>No articles found for this topic.</p>
      ) : (
        <ul className="article-list">
          {articles.map((article) => (
            <li key={article.article_id} className="article-card">
              {article.article_img_url && (
                <img
                  src={article.article_img_url}
                  alt={`Image for ${article.title}`}
                  className="topic-article-image"
                />
              )}
              <a
                href={`/articles/${article.article_id}`}
                className="article-title-link"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
