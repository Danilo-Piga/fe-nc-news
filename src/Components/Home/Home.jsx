import { useState, useEffect } from "react";
import { fetchArticles } from "../../Utils/api";
import ArticleCard from "../ArticleCard/ArticleCard";
import '../Home/Home.css'
import ErrorPage from "../ErrorPage/ErrorPage";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("")

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <ErrorPage message={error} />;

  return (
    <>
      <main>
      <h1 className="home-title">Welcome to NC News 🗞️</h1>
        <ArticleCard articles={articles} />
      </main>
    </>
  );
}
export default Home;
