import { useState, useEffect } from "react";
import { fetchArticles } from "../Utils/api";
import ArticleCard from "./ArticleCard";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading ...</p>

  return (
    <>
      <h1 className="home-title">NC News</h1>
      <main>
        <ArticleCard articles={articles} />
      </main>
    </>
  );
}
export default Home;
