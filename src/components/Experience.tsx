import sapLogo from "../assets/sap_logo.png";
let Experience = () => {
  return (
    <div id="experience" className="container">
      <h1 className="display-5 fw-bold experience-text">Experiences</h1>
      <div className="row">
        <div className="col-md-5 card card-experience ge-card">
          <img src={sapLogo} className="card-img-top" alt="..." />
          <div className="card-body experience-card-body">
            <h5 className="card-title experience-card-title">SAP</h5>
            <h6 className="experience-card-subtitle mb-2">
              Developer (Oct-2021 - Present )
            </h6>
            <p className="experience-card-text">
              Being a part of SAP UX S4 HANA team, my responsibilities were.
              <ul>
                <li>
                  Developing a new Home Page for S4 HANA, which is used as the
                  central point of launchpad for any application of S4 HANA
                  suite.
                </li>
                <li>
                  Continues enhancements on the home page with a lot of new
                  features like drag & drop of items, full screen view,
                  animations and providing personalization of the tool to each
                  user.
                </li>
                <li>
                  Maintaining and fixed bugs and handling customer tickets.
                </li>
              </ul>
            </p>
          </div>
          <div className="row skill-used">
            <ul>
              <li className="skill-name badge rounded-pill">Javascript</li>
              <li className="skill-name badge rounded-pill">Typescript</li>
              <li className="skill-name badge rounded-pill">React</li>
              <li className="skill-name badge rounded-pill">SAP UI5</li>
              <li className="skill-name badge rounded-pill">REST APIs</li>
              <li className="skill-name badge rounded-pill">OData</li>
              <li className="skill-name badge rounded-pill">JEST</li>
            </ul>
          </div>
        </div>
        <div className="col-md-5 offset-md-1 card card-experience tcs-card">
          <img src={sapLogo} className="card-img-top" alt="..." />
          <div className="card-body experience-card-body">
            <h5 className="card-title experience-card-title">SAP</h5>
            <h6 className="experience-card-subtitle mb-2">
              Associate Developer (Jan 2020 - Oct 2021)
            </h6>
            <p className="experience-card-text">
              Being a part of SAP UX UI5 team, my responsibilities were.
              <ul>
                <li>
                  Developing new features and controls for SAP\'s front-end
                  framework SAP UI5, which is used by all the fiori applications
                  across different teams.
                </li>
                <li>
                  Developing different fiori elements and reusable suite
                  controls for the core framework SAP UI5.
                </li>
                <li>
                  Creating graphical controls to visualize complex network
                  structures using D3 library.
                </li>
              </ul>
            </p>
          </div>
          <div className="row skill-used">
            <ul>
              <li className="skill-name badge rounded-pill">Javascript</li>
              <li className="skill-name badge rounded-pill">SAP UI5</li>
              <li className="skill-name badge rounded-pill">SAP Fiori</li>
              <li className="skill-name badge rounded-pill">D3.js</li>
              <li className="skill-name badge rounded-pill">Qunit JS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
