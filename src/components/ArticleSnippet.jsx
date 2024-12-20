import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticleById } from "../api";
import { Error } from "./Error";

function getSnippet(content, maxLength = 120) {
  return content
    ? content.length > maxLength
      ? content.slice(0, maxLength) + "..."
      : content
    : "";
}

export function ArticleSnippet({ articleId }) {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(articleId)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [articleId]);

  if (isLoading) {
    return <p>Loading article snippet</p>;
  }

  if (error) {
    return (
      <Error message={error.message || "Error loading the article snippet."} />
    );
  }

  return (
    <div className="article-snippet">
      <p className="article-snippet-text">
        {getSnippet(article?.body || "")}{" "}
        <Link to={`/articles/${article.article_id}`} className="read-more-link">
          Read More
        </Link>
      </p>
    </div>
  );
}
