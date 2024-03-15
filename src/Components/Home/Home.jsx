import { useState, useEffect } from "react";
import { fetchArticles } from "../../Utils/api";
import ArticleCard from "../ArticleCard/ArticleCard";
import "../Home/Home.css";
import ErrorPage from "../ErrorPage/ErrorPage";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
    
     const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    
   
    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) return <>
  <p className="loading-text">Loading ...</p>
  <img className="Preloader" src="https://i.gifer.com/ZWdx.gif" alt="Preloader gif"/>;
  </>
  // if (isLoading) return <p>Loading ...</p>;
  if (error) return <ErrorPage message={error} />;

  return (
    <>
      <main>
        <h1 className="home-title">Welcome to NC News 📰</h1>
        <p className="date-time">{currentDateTime.toLocaleString()}</p>
        <ArticleCard articles={articles} />
      </main>
    </>
  );
}
export default Home;
