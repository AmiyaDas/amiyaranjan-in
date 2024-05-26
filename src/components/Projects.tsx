import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
let Projects = () => {
  let dataForm = [
    {
      name: "",
      desc: "",
      language: "",
      size: "0",
      starCount: "0",
      url: "",
    },
  ];
  const [data, setData] = useState(dataForm);
  const githuburl = "https://github.com/AmiyaDas";
  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const gitData = await (
        await fetch("https://api.github.com/users/AmiyaDas/repos")
      ).json();
      const data = gitData
        .map((obj: any) => [
          {
            name: obj.name,
            desc: obj.description,
            language: obj.language,
            size: obj.size,
            starCount: obj.stargazers_count,
            url: obj.html_url,
          },
        ])
        .flat();
      // set state when the data received

      setData(data);
    };
    dataFetch();
  }, []);

  const projectCards = data.map((repo) => {
    let url = repo.url;
    if (parseInt(repo.starCount) > 0) {
      return (
        <div
          className="card project-card"
          key={repo.name}
          onClick={() => {
            window.open(url, "_blank");
          }}
        >
          <div className="card-body">
            <h4 className="card-title">
              <FontAwesomeIcon icon={faBookBookmark} /> {"  "}
              {repo.name}
            </h4>
            <p className="project-desc">
              {repo.desc || "No Description Found"}
            </p>
            <div className="row">
              <div className="col-md-6 project-language">{repo.language}</div>
              <div className="col-md-6 project-size">
                {parseInt(repo.size) / 1000} MB
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div id="projects" className="projects container">
      <h1 className="display-5 fw-bold">My Projects!</h1>
      <div className="">{projectCards}</div>
      <div className="h-100 d-flex align-items-center justify-content-center btn-project">
        <button
          className="btn btn-outline-light more-projects"
          onClick={() => {
            window.open(githuburl, "_blank");
          }}
        >
          More Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
