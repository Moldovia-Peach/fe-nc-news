import { FeaturedArticles } from "./FeaturedArticles";
import { TopicList } from "./TopicList";

export function Home() {
  return (
    <main className="home-page">
      <section className="featured-articles-section">
        <FeaturedArticles />
      </section>
      <section className="topic-list-section">
        <TopicList />
      </section>
    </main>
  );
}
