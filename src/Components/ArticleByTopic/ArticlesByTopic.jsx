import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../../Utils/api";
import { useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticlesByTopic.css";

export default function ArticlesByTopic() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();

  useEffect(() => {
    fetchArticlesByTopic(topic).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <section>
        <ul className="article-block">
          <ArticleCard topic={topic} articles={articles} />
        </ul>
      </section>
    </>
  );
}
