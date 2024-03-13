import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../../Utils/api";
import '../Topics/Topics.css'

function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then((data) => { 
      setTopics(data); 
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="topics-container">
      <ul className="topics">
        {topics.map((topic) => (
          <li key={topic.slug} className="topic-item">
            <Link to={`/articles/topics/${topic.slug}`} className="topic-link">
              <div className="topic-box">
                <h2 className="topic-slug">{topic.slug}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Topics;
