import { useState, useEffect } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { Error } from "./Error";
import { updateArticleVotes } from "../api";

export function VotingCard({ article_id, initialVotes }) {
  const [localVotes, setLocalVotes] = useState(initialVotes);
  const [isVoting, setIsVoting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLocalVotes(initialVotes);
  }, [initialVotes]);

  const handleVote = (voteChange) => {
    if (isVoting) return;

    setError(null);
    setLocalVotes((currentVotes) => currentVotes + voteChange);
    setIsVoting(true);

    updateArticleVotes(article_id, voteChange)
      .then(() => {})
      .catch((err) => {
        setLocalVotes((currentVotes) => currentVotes - voteChange);
        setError("Failed to save your vote. Please try again later.");
      })
      .finally(() => {
        setIsVoting(false);
      });
  };

  return (
    <div className="voting-card">
      <h3>Was this article helpful?</h3>
      {error && <Error message={error.message} />}
      <button
        className="upvote-button"
        onClick={() => handleVote(1)}
        disabled={isVoting}
      >
        Upvote <FaRegThumbsUp />
      </button>
      <p>{localVotes} Votes</p>
      <button
        className="downvote-button"
        onClick={() => handleVote(-1)}
        disabled={isVoting}
      >
        Downvote <FaRegThumbsDown />
      </button>
    </div>
  );
}
