import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
let Contact = () => {
  return (
    <div id="contact" className="container contact">
      <h1 className="contact-header-text">A cup of coffee?</h1>
      <div className="social-icons">
        <a
          href="mailto:ranjandass13@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/amiya-ranjan-das/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-contact"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/AmiyaDas"
          target="_blank"
          rel="noopener noreferrer"
          className="social-contact"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://twitter.com/Amiya_r_das"
          target="_blank"
          rel="noopener noreferrer"
          className="social-contact"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>
      <h5 className="footer">Developed with ❤️ by Amiya Ranjan Das</h5>
    </div>
  );
};

export default Contact;
