import workIllustration from "../assets/engineer-1.svg";
import { TypeAnimation } from "react-type-animation";
import CV from "../assets/Amiya_resume.pdf";

let Home = () => {
  return (
    <>
      <div className="container py-4 home">
        <div className="row home-div">
          <div className="col-md-8 col-sm-6 col-xs-6 col-home-text">
            <h1 className="display-5 fw-bold hello-text">Hello There!</h1>
            <p className="fs-4">
              <span className="name-text">This is Amiya Ranjan Das </span>
              <br className="space-for-small-device" />
              <TypeAnimation
                sequence={[
                  "I'm a Software Engineer.",
                  1000,
                  "I'm a Web Developer.",
                  1000,
                  "I'm a Proud Indian.",
                  1000,
                ]}
                speed={50}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
              />
            </p>
            <a href={CV} download="Resume-Amiya" target="_blank">
              <button
                className="btn btn-cv btn-outline-light rounded-pill"
                type="button"
              >
                Check My CV
              </button>
            </a>
            <button
              className="btn btn-outline-light rounded-pill btn-linkedin"
              type="button"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/amiya-ranjan-das/",
                  "_blank"
                );
              }}
            >
              <i className="bi bi-linkedin"></i>
              <span className="linkedin-text">LinkedIn</span>
            </button>
          </div>
          <div className="col-md-4 image">
            <img
              src={workIllustration}
              alt="programmer"
              className="programmer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
