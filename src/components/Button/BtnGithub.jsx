import React from "react";

import githubIcon from "../Button/gitHub-black.svg";

function BtnGithub({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={githubIcon} alt="" />
      GitHub repo
    </a>
  );
}

export default BtnGithub;
