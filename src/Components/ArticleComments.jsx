import { useState, useEffect } from "react";
import { fetchCommentsByArticle } from "../Utils/api";
import { useParams } from "react-router";
import moment from "moment";
import './ArticleComments.css'

function ArticleComments({
  articleComments,
  setArticleComments,
  fetchedComments,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchCommentsByArticle(article_id).then(({ comments }) => {
      setArticleComments(comments);
      setIsLoading(false);
    });
  }, [fetchedComments]);

  if (isLoading) return <p>Loading...</p>;
  if (!isLoading && articleComments.length === 0) return <p>No comments</p>;

  return (
    <section className="Comments">
      <h3 className="comments-header">Comments</h3>

      <ul>
        {articleComments.map(
          ({ comment_id, body, author, votes, created_at }, index) => {
            return (
              <li key={index} className="comment">
                <h2>{author}</h2>
                <p>{body}</p>
                <p>
                  Posted on {moment(`${created_at}`).format("Do MMMM YYYY")}{" "}
                </p>
                <p>Votes: {votes}</p>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
}

export default ArticleComments;
