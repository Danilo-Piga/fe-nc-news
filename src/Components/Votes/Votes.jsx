import { incrementVotes, decrementVotes } from "../../Utils/api";
import { useState } from "react";
import "./Votes.css";

function Votes({ article, setArticle, article_id }) {
  const [voted, setVoted] = useState(false);

  function handleClick() {
    if (voted === false) {
      setVoted(true);
      setArticle((article) => {
        return { ...article, votes: article.votes + 1 };
      });
      incrementVotes(article_id)
        .then(() => {
          return { ...article, votes: article.votes - 1 };
        })
        .catch((err) => {
          if (err) {
            return <p>Unable to vote right now, try again later.</p>;
          }
        });
    } else {
      setVoted(false);
      setArticle((article) => {
        return { ...article, votes: article.votes - 1 };
      });
      decrementVotes(article_id)
        .then(() => {
          return { ...article, votes: article.votes + 1 };
        })
        .catch((err) => {
          if (err) {
            return <p>Unable to vote right now, try again later.</p>;
          }
        });
    }
  }

  return (
    <div className={`vote-buttons-container ${voted ? "voted" : ""}`}>
      <button
        className={`vote-button ${voted ? "voted" : ""}`}
        style={{ background: voted ? "lightblue" : "transparent" }}
        onClick={handleClick}
      >
        👍🏼
      </button>
      <p className="vote-count"> {article.votes} likes </p>
    </div>
  );
}

export default Votes;
