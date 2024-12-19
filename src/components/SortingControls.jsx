import React from "react";

export function SortingControls({
  sortBy,
  order,
  onSortChange,
  onOrderChange,
}) {
  return (
    <div className="sorting-controls">
      <label>
        Sort By:
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label>
        Order:
        <select value={order} onChange={(e) => onOrderChange(e.target.value)}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </div>
  );
}
