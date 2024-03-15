import { useState, useEffect } from "react";
import { fetchCommentsByArticle, deleteComment } from "../../Utils/api";
import { useParams } from "react-router";
import moment from "moment";
import "./ArticleComments.css";

function ArticleComments({
  articleComments,
  setArticleComments,
  fetchedComments,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const { article_id } = useParams();

  const handleDeleteSuccess = async (commentId) => {
    try {
      setIsDeleting(true);

      await deleteComment(commentId);
      setArticleComments((prevComments) =>
        prevComments.filter((comment) => comment.comment_id !== commentId)
      );

      setIsDeleting(false);
    } catch (error) {
      console.error("Error deleting comment:", error);
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchCommentsByArticle(article_id).then(({ comments }) => {
      setArticleComments(comments);
      setIsLoading(false);
    });
  }, [fetchedComments, article_id]);

  if (isLoading) return <>
  <p className="loading-text">Loading ...</p>
  <img className="Preloader" src="https://i.gifer.com/ZWdx.gif" alt="Preloader gif"/>;
  </>
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
                <button
                  className="button"
                  onClick={() => handleDeleteSuccess(comment_id)}
                  disabled={isDeleting}
                >
                  Delete
                </button>
                {isDeleting && <button disabled>Deleting...</button>}
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
}

export default ArticleComments;
