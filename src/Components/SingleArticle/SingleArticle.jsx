import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleArticle } from "../../Utils/api";
import moment from "moment";
import "./SingleArticle.css";
import ArticleComments from "../ArticleComments/ArticleComments";
import Votes from "../Votes/Votes";

function SingleArticle({ currentUser }) {
  const [article, setArticle] = useState([]);
  const [articleComments, setArticleComments] = useState([]);
  const [fetchedComments, setFetchedComments] = useState(false);
  const [votes, setVotes] = useState(0);
  const { article_id } = useParams();

  useEffect(() => {
    fetchSingleArticle(article_id).then(({ article }) => setArticle(article));
  }, []);

  return (
    <main>
      <div key={article.article_id}>
        <h2 className="article-title">{article.title}</h2>
        <h3>
          Written by {article.author} on<br></br>{" "}
          {moment(`${article.created_at}`).format("Do MMMM YYYY")}{" "}
        </h3>
        <img src={article.article_img_url} />
        <p>{article.body}</p>
        <Votes
          article={article}
          setArticle={setArticle}
          article_id={article_id}
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
