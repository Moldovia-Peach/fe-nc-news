import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

export function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/" target="_blank">
        <SlSocialFacebook className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <SlSocialLinkedin className="social-icon" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <SlSocialInstagram className="social-icon" />
      </a>
    </div>
  );
}
