import { postComment } from "../../Utils/api";
import { useState } from "react";
import { useParams } from "react-router";
import '../CommentAdder/CommentAdder.css'

function CommentAdder({ setArticleComments, currentUser, setFetchedComments }) {
  const { username } = currentUser;
  const [newComment, setNewComment] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const { article_id } = useParams();

  function handleSubmit(event) {
    setFetchedComments(false);
    event.preventDefault();
    postComment(username, newComment, article_id)
      .then((newCommentFromApi) => {
        setNewComment("");
        setFetchedComments(true);
        setCommentMessage("Comment posted successfully.");
        setTimeout(() => {
          setCommentMessage("");
        }, 3000);
        setArticleComments((currComments) => {
          return [newCommentFromApi, ...currComments];
        });
      })
      .catch((error) => {
        setCommentMessage("Failed to post comment. Please try again later.");
        console.error(error);
      });
  }
  return (
    <section className="comment-adder">
      <form onSubmit={handleSubmit}>
        <textarea
          style={{ height: 80, width: 500 }}
          placeholder="Write a comment..."
          multiline="true"
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        ></textarea>
        <br></br>
        <button type="submit" disabled={!newComment}>
         Post comment
        </button>
        <p className="comment-success-message">{commentMessage}</p>
        <br></br>
      </form>
    </section>
  );
}

export default CommentAdder;
