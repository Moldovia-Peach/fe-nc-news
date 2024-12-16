import React from "react";

export function ArticleCard({ article }) {
  const {
    article_id,
    title,
    author,
    created_at,
    article_img_url,
    comment_count,
    topic,
    votes,
  } = article;

  const formattedDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="article-card">
      <img src={article_img_url} alt={title} className="article-image" />
      <h2 className="article-title">{title}</h2>
      <span className="article-topic">{topic}</span>
      <br></br>
      <span className="article-author">{author}</span>
      <p className="article-date">{formattedDate}</p>
      <p className="article-votes">Votes: {votes}</p>
      <p className="article-comments">{comment_count} Comments</p>
    </div>
  );
}
