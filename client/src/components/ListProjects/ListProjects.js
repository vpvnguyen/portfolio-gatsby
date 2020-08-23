import React, { useState, useEffect } from "react";
import { Paper, Button } from "@material-ui/core";
import Languages from "../ListProjects/Languages";
import dayjs from "dayjs";

import GithubAPI from "../../utils/api/github.api.js";

const style = {
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "arial",
  },
  table: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px",
    padding: "10px",
    backgroundColor: "#EDEDED",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  subtext: {
    fontSize: ".75rem",
  },
};

const ListProjects = () => {
  const [githubProjects, setGithubProjects] = useState();

  useEffect(() => {
    const fetchGithubProjects = async () => {
      const githubProjectsResponse = await GithubAPI.getGithubProjects();
      await setGithubProjects(githubProjectsResponse);
      console.log(githubProjectsResponse);
    };

    fetchGithubProjects();
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <div style={style.tableContainer}>
        {githubProjects
          ? githubProjects.map(project => (
              <Button
                key={project.name}
                style={style.table}
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                fullWidth
              >
                <div style={style.left}>
                  <h3>{project.name}</h3>
                  <div style={style.subtext}>{project.description}</div>
                </div>
                <div style={style.right}>
                  <Languages style={style.subtext} projectName={project.name} />
                  <div style={style.subtext}>
                    {dayjs(project.pushed_at).format("MMM/YYYY")}
                  </div>
                </div>
              </Button>
            ))
          : `Loading...`}
      </div>
    </>
  );
};

export default ListProjects;
