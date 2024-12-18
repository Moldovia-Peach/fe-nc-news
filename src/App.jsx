import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ArticleList } from "../components/ArticleList";
import { ArticlePage } from "../components/ArticlePage";
import { FiltersAndSort } from "../components/FiltersAndSort";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      {/* <SearchBar />
      <FiltersAndSort /> */}
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
