import React from "react";

export function SortingControls({ sortBy, order, setSearchParams }) {
  const handleSortChange = (newSortBy) => {
    setSearchParams((prevParams) => {
      prevParams.set("sort_by", newSortBy);
      return prevParams;
    });
  };

  const handleOrderChange = (newOrder) => {
    setSearchParams((prevParams) => {
      prevParams.set("order", newOrder);
      return prevParams;
    });
  };

  return (
    <div className="sorting-controls">
      <label>
        Sort By:
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label>
        Order:
        <select
          value={order}
          onChange={(e) => handleOrderChange(e.target.value)}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </div>
  );
}
