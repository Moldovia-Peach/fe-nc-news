import React from "react";
import { Link } from "react-router-dom";
import { ArticleSnippet } from "./ArticleSnippet";
import { UserInfo } from "./UserInfo";

export function ArticleCard({ article }) {
  const {article_img_url, title, article_id, author} = article;
  return (
    <div className="article-card">
      <div className="article-info">
        {article_img_url && (
          <img
            src={article_img_url}
            alt={title}
            className="article-image"
          />
        )}

        <h3 className="article-title">
          <Link
            to={`/articles/${article_id}`}
            className="article-title-link"
          >
            {title}
          </Link>
        </h3>
        <ArticleSnippet articleId={article_id} />
        <UserInfo author={author} />
      </div>
    </div>
  );
}
