import { ContactInfo } from "./ContactInfo";
import { FooterLinks } from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <>
      <SocialLinks />
      <FooterLinks />
      <ContactInfo />
    </>
  );
}
