import { Link } from "react-router-dom";

export function Logo() {
  return (
    <h1 className="logo">
      <Link to="/" className="logo-link">
        NC News
      </Link>
    </h1>
  );
}
