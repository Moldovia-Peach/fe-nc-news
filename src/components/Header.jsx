import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header role="banner" className="header">
      <div className="header-content">
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
}
