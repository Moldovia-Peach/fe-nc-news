import React, { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../api";
import { Error } from "./Error";
import { useSearchParams } from "react-router-dom";
import { SortingControls } from "./SortingControls";

export function ArticleList({ limit }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    setLoading(true);
    setError(null);

    getArticles({ sort_by: sortBy, order })
      .then((fetchedArticles) => {
        setArticles(fetchedArticles.slice(0, limit));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sortBy, order, limit]);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <Error message={error.message || "Error loading articles..."} />;
  }

  if (articles.length === 0) {
    return <p>There are no articles available.</p>;
  }

  return (
    <div>
      <SortingControls
      sortBy={sortBy}
      order={order}
      setSearchParams={setSearchParams}
      />
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
}
