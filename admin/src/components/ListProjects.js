import React, { Fragment, useState, useEffect } from "react"
import dayjs from "dayjs"

import GithubAPI from "../utils/api/github.api.js"

const style = {
  lineBreak: {
    margin: 40,
    height: ".05rem",
    /* Set the hr color */
    color: "#333" /* old IE */,
    backgroundColor: "#333" /* Modern Browsers */,
    opacity: 0.25,
  },
  projectDescription: {
    padding: "0 1rem 0 1rem",
  },
  projectMinorInfo: {
    fontSize: ".7rem",
  },
}

const ListProjects = () => {
  const [githubProjects, setGithubProjects] = useState()

  useEffect(() => {
    const fetchGithubProjects = async () => {
      const githubProjectsResponse = await GithubAPI.getGithubProjects()
      setGithubProjects(githubProjectsResponse)
      console.log(githubProjectsResponse)
    }

    fetchGithubProjects()
  }, [])

  return (
    <Fragment>
      <h1>Projects</h1>

      {githubProjects ? (
        githubProjects.map(project => (
          <div>
            <h3>{project.name}</h3>

            {project.description !== null && project.description !== "" ? (
              <p style={style.projectDescription}>{project.description}</p>
            ) : null}

            {project.homepage !== null && project.homepage !== "" ? (
              <div>
                Demo:{" "}
                <a href={project.homepage} target="_blank" rel="noreferrer">
                  {project.homepage}
                </a>
              </div>
            ) : null}

            <div>
              Repo:{" "}
              <a href={project.html_url} target="_blank" rel="noreferrer">
                {project.html_url}
              </a>
            </div>

            <div style={style.projectMinorInfo}>
              <p>{project.language}</p>
              <p>Updated: {dayjs(project.pushed_at).format("MM-DD-YYYY")}</p>
            </div>

            <hr style={style.lineBreak} />
          </div>
        ))
      ) : (
        <h2>Loading Projects...</h2>
      )}
    </Fragment>
  )
}

export default ListProjects
