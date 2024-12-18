import React, { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";

export function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-nc-news-zyxm.onrender.com/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading NC News articles...</p>;
  }

  return (
    <>
      <div className="article-introduction">
        <h4>Browse and read the latest stories</h4>
        <h2>Latest Stories</h2>
      </div>
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </>
  );
}
