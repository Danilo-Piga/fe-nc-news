import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleArticle } from "../../Utils/api";
import moment from "moment";
import "./SingleArticle.css";
import ArticleComments from "../ArticleComments/ArticleComments";
import Votes from "../Votes/Votes";
import CommentAdder from "../CommentAdder/CommentAdder";
import ErrorPage from "../ErrorPage/ErrorPage";

function SingleArticle({ currentUser }) {
  const [article, setArticle] = useState(null);
  const [articleComments, setArticleComments] = useState([]);
  const [fetchedComments, setFetchedComments] = useState(false);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    fetchSingleArticle(article_id)
      .then(({ article }) => setArticle(article))
      .catch((error) =>
        setError("Error fetching article. Please try again later.")
      );
  }, [article_id]);

  if (error) {
    return <ErrorPage message={error} />;
  }

  if (!article) {
    return <img className="Preloader" src="https://i.gifer.com/ZWdx.gif" alt="Preloader gif"/>;
  }

  return (
    <main>
      <div key={article.article_id}>
        <h2 className="article-title">{article.title}</h2>
        <h3>
          Author: {article.author} <br></br>{" "}
          {moment(`${article.created_at}`).format("Do MMMM YYYY")}{" "}
        </h3>
        <img src={article.article_img_url} />
        <p>{article.body}</p>
        <Votes
          article={article}
          setArticle={setArticle}
          article_id={article_id}
        />
        <CommentAdder
          setArticleComments={setArticleComments}
          currentUser={currentUser}
          setFetchedComments={setFetchedComments}
        />
        <ArticleComments
          articleComments={articleComments}
          setArticleComments={setArticleComments}
          fetchedComments={fetchedComments}
        />
      </div>
    </main>
  );
}

export default SingleArticle;
