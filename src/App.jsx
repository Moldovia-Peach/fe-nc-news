import { ArticleList } from "../components/ArticleList";
import { FiltersAndSort } from "../components/FiltersAndSort";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <FiltersAndSort />
      <ArticleList />
      <Footer />
    </>
  );
}

export default App;
