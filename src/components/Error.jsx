export function Error({ message }) {
  return (
    <div className="error-message">
      <h1>Error</h1>
      <p>{message}</p>
      <p>Please try again later.</p>
    </div>
  );
}
