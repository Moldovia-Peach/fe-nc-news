import { NavLinks } from "./NavLinks";

export function ErrorPage() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>
        The page you are looking for does not exist. Why not navigate to another
        page on our website?
      </p>
      <NavLinks />
    </div>
  );
}
