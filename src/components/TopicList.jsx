import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";
import { MdOutlineTopic } from "react-icons/md";
import { Error } from "./Error";

export function TopicList() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getTopics()
      .then((data) => {
        setTopics(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading topics...</p>;
  }

  if (error) {
    return (
      <Error
        message={error.message || "Error fetching topics. Try again later."}
      />
    );
  }

  return (
    <div className="topics-section">
      <h4>Browse and read articles by topic</h4>
      <h2>Topics</h2>
      <p className="topics-paragraph">
        Explore our range of topics to discover the latest trends, insights and
        discussions. Whether you are passionate about coding, football or
        cooking our Topics section brings together articles and resources to
        keep you informed. Browse through each topic to find thought-provoking
        stories that cater to your interests. Start exploring today and discover
        new content tailored just for you.
      </p>
      <div className="topics-cards">
        {topics.length > 0 ? (
          topics.map((topic) => (
            <div key={topic.slug} className="topic-card">
              <Link to={`/topics/${topic.slug}`}>
                <div className="topic-card-content">
                  <MdOutlineTopic />
                  <h3>{topic.slug}</h3>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No topics available.</p>
        )}
      </div>
    </div>
  );
}
