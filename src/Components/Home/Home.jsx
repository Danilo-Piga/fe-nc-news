import { useState, useEffect } from "react";
import { fetchArticles } from "../../Utils/api";
import ArticleCard from "../ArticleCard/ArticleCard";
import '../Home/Home.css'

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <>
      <main>
      <h1 className="home-title">Welcome to NC News</h1>
        <ArticleCard articles={articles} />
      </main>
    </>
  );
}
export default Home;
