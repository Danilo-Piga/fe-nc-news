import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../../Utils/api";
import "../Topics/Topics.css";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTopics()
      .then((data) => {
        setTopics(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching topics. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  const topicEmojis = {
    coding: "💻",
    football: "⚽",
    cooking: "🍲",
  };

  if (isLoading) {
    return <>
    <p className="loading-text">Loading ...</p>
    <img className="Preloader" src="https://i.gifer.com/ZWdx.gif" alt="Preloader gif"/>;
    </>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <main>
      <div className="topics-container">
        <ul className="topics">
          {topics.map((topic) => (
            <li key={topic.slug} className="topic-item">
              <Link
                to={`/articles/topics/${topic.slug}`}
                className="topic-link"
              >
                <div className="topic-box">
                  <h2 className="topic-slug">
                    {topic.slug} {topicEmojis[topic.slug]}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Topics;
