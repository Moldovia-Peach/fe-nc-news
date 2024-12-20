import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ArticleList } from "./components/ArticleList";
import { ArticlePage } from "./components/ArticlePage";
import { TopicPage } from "./components/TopicPage";
import { Footer } from "./components/Footer";
import { TopicList } from "./components/TopicList";
import { ContactPage } from "./components/ContactPage";
import { ErrorPage } from "./components/ErrorPage";
import { LogInPage } from "./components/LogInPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList limit={Infinity} />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/topics" element={<TopicList />} />
        <Route path="/topics/:topicSlug" element={<TopicPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
