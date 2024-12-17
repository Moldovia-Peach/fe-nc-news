import React from "react";
import { Link } from "react-router-dom";
import { ArticleInfo } from "./ArticleInfo";

export function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <div className="article-info">
        <ArticleInfo
          title={article.title}
          author={article.author}
          created_at={article.created_at}
          topic={article.topic}
          votes={article.votes}
          comment_count={article.comment_count}
          article_img_url={article.article_img_url}
          showImage={true}
        />
      </div>
      <Link to={`/articles/${article.article_id}`} className="article-link">
        Read Article
      </Link>
    </div>
  );
}
