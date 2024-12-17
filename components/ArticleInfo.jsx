import React from "react";

export function ArticleInfo({
  title,
  author,
  created_at,
  topic,
  votes,
  comment_count,
  article_img_url,
  showImage = false,
  body = null,
}) {
  const formattedDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="article-details">
      <h2 className="article-title">{title}</h2>
      {showImage && (
        <img src={article_img_url} alt={title} className="article-image" />
      )}

      <div className="article-meta">
        <p>
          <b>Author:</b> {author} | <b>Published on:</b> {formattedDate}
        </p>
        <p>
          <b>Topic:</b> {topic} | <b>Votes:</b> {votes} | <b>Comments:</b>{" "}
          {comment_count}
        </p>
      </div>

      {body && <p className="article-body">{body}</p>}
    </div>
  );
}
