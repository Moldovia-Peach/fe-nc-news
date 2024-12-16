import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <div className="header">
      <Logo />
      <NavLinks />
      <h1>NC News</h1>
    </div>
  );
}
