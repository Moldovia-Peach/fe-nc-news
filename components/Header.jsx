import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
}
