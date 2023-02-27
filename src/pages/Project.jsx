import { useParams } from "react-router-dom";
import React from "react";

import { projects } from "../helpers/projectList";
import BtnGithub from "../components/Button/BtnGithub";

function Project() {
  const { id } = useParams();
  const project = projects[id];

  console.log(project);
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt="images"
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills:{project.skills}</p>
          </div>
          {project.gitHubLink && (
            <BtnGithub link="https://github.com/Rechkalov1" />
          )}
        </div>
      </div>
    </main>
  );
}

export default Project;
