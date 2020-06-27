import React, { Fragment, useState, useEffect } from "react";

import ProjectAPI from "../../utils/api/projects.api.js";
import GithubAPI from "../../utils/api/github.api.js";

const style = {
  lineBreak: {
    margin: 40,
    border: "none",
    height: "1px",
    /* Set the hr color */
    color: "#333" /* old IE */,
    backgroundColor: "#333" /* Modern Browsers */,
    opacity: 0.25,
  },
};

const ListProjects = () => {
  const [projects, setProjects] = useState({});
  const [githubProjects, setGithubProjects] = useState();

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsResponse = await ProjectAPI.getAllProjects();
      setProjects(projectsResponse);
      console.log(projectsResponse);
    };

    const fetchGithubProjects = async () => {
      const githubProjectsResponse = await GithubAPI.getGithubProjects();
      setGithubProjects(githubProjectsResponse);
      console.log(githubProjectsResponse);
    };

    fetchProjects();
    fetchGithubProjects();
  }, []);

  return (
    <Fragment>
      <h1>List of Projects</h1>
      <p>{projects.message}</p>
      {githubProjects ? (
        githubProjects.map(project => (
          <div>
            <div>ID: {project.id}</div>
            <a href={project.html_url} target="_blank" rel="noreferrer">
              {project.html_url}
            </a>
            <p>{project.language}</p>
            <p>Created at {project.created_at}</p>
            <p>Updated at {project.updated_at}</p>
            <hr style={style.lineBreak} />
          </div>
        ))
      ) : (
        <div>Loading Projects...</div>
      )}
    </Fragment>
  );
};

export default ListProjects;
