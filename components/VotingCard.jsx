import { useState } from "react";
import { updateArticleVotes } from "../src/api";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

export function VotingCard({ article_id, initialVotes, setVotes }) {
  const [isVoting, setIsVoting] = useState(false);

  const handleVote = (voteChange) => {
    setVotes((currentVotes) => currentVotes + voteChange);
    setIsVoting(true);

    updateArticleVotes(article_id, voteChange)
      .then((updatedArticle) => {
        setVotes(updatedArticle.votes);
        setIsVoting(false);
      })
      .catch(() => {
        setVotes((currentVotes) => currentVotes - voteChange);
        setIsVoting(false);
      });
  };

  return (
    <>
      <hr />
      <div className="voting-card">
        <h3>Was this article helpful?</h3>
        <p>Total Votes: {initialVotes}</p>
        <button className="upvote-button" onClick={() => handleVote(1)}>
          Upvote <FaRegThumbsUp />
        </button>
        <button className="downvote-button" onClick={() => handleVote(-1)}>
          Downvote <FaRegThumbsDown />
        </button>
      </div>
      <hr />
    </>
  );
}
