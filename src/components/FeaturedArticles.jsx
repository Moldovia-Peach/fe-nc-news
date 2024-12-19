import React from "react";
import { Link } from "react-router-dom";
import { ArticleList } from "./ArticleList";

export function FeaturedArticles() {
  return (
    <section className="featured-articles">
      <div className="article-introduction">
        <h4>Browse and read the latest stories</h4>
        <h2>Featured Articles</h2>
      </div>

      <ArticleList limit={9} />

      <Link to={"/articles"} className="view-all-articles-link">
        View All Articles
      </Link>
    </section>
  );
}
