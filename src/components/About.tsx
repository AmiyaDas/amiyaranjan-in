import personIllustration from "../assets/person-namaste.svg";
let About = () => {
  return (
    <div id="about" className="container py-4 about">
      <div className="row home-div">
        <div className="col-md-8 h-100 p-5">
          <h1 className="display-5 fw-bold hello-text">Hi All, I'm Amiya</h1>
          <p className="fs-4">
            <span className="desc-text">
              Passionate frontend developer with a knack for crafting seamless,
              user-centric web solutions. Proficient in Javascript, Typescript,
              React & other web technologies, with a commitment to delivering
              exceptional user experiences and driving digital growth.
            </span>
          </p>
          <button
            className="btn btn-light btn-github rounded-circle social"
            type="button"
            onClick={() => {
              window.open("https://github.com/AmiyaDas", "_blank");
            }}
          >
            <i className="bi bi-github"></i>
          </button>
          <button
            className="btn btn-light rounded-circle social btn-linkedin-social"
            type="button"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/amiya-ranjan-das/",
                "_blank"
              );
            }}
          >
            <i className="bi bi-linkedin"></i>
          </button>
          <button
            className="btn btn-light rounded-circle social btn-google"
            type="button"
            onClick={() => {
              window.open("mailto:ranjandass13@gmail.com", "_blank");
            }}
          >
            <i className="bi bi-google"></i>
          </button>
          <button
            className="btn btn-light rounded-circle social btn-twitter"
            type="button"
            onClick={() => {
              window.open("https://twitter.com/Amiya_r_das", "_blank");
            }}
          >
            <i className="bi bi-twitter"></i>
          </button>
        </div>
        <div className="col-md-4 image-about">
          <img
            src={personIllustration}
            alt="programmer"
            className="person-hello"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
