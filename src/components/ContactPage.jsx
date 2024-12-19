import { ContactInfo } from "./ContactInfo";
import { SocialIcons } from "./SocialIcons";

export function ContactPage() {
  return (
    <main className="contact-page">
      <section className="help-section">
        <h3 className="help-heading">Help</h3>
        <h2>How to contact NC News</h2>
        <p>
          We'd love to hear from you! Whether you have a question, comment, or
          just want to say hello, feel free to get in touch using the
          information below.
        </p>
      </section>
      <section className="contact-info-section">
        <h2>Contact Information</h2>
        <ContactInfo />
      </section>
      <section className="advertising-section">
        <h3>Advertising Inquiries</h3>
        <p>
          Interested in advertising with us? Please reach out to
          ads@ncnews.co.uk
        </p>
      </section>
      <section className="follow-us-section">
        <h3>Follow Us</h3>
        <SocialIcons />
      </section>
    </main>
  );
}
