import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";

export function ContactInfo() {
  return (
    <div className="contact-info">
      <address>
        <h3>Email Address</h3>
        <p>
          <MdEmail /> info@ncnews.co.uk
        </p>
        <h3>Phone Number</h3>
        <p>
          <FaPhone /> +44 20 7946 0850
        </p>
        <h3>Mailing Address</h3>
        <p>
          <FaAddressBook /> NC News Ltd. 42 Street Flat 3B London, EC1A 1AA
          United Kingdom
        </p>
        <h3>Business Hours</h3>
        <p>
          <GoClockFill /> Mon-Fri: 9:00 AM - 5:00 PM GMT
        </p>
        <p>
          <GoClockFill /> Sat-Sun: Closed
        </p>
      </address>
    </div>
  );
}
