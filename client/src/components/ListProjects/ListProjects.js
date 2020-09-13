import React, { useState, useEffect } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import dayjs from "dayjs";
import LayoutStyle from "../../ui/Layout/Layout.style";
import Languages from "../ListProjects/Languages";
import theme from "../../ui/theme";
import GithubAPI from "../../utils/api/github.api.js";

const style = {
  loader: {
    display: "flex",
    justifyContent: "center",
    padding: "40px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "arial",
  },
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px",
    padding: "10px",
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
    fontSize: ".7rem",
  },
};

const ListProjects = () => {
  const [githubProjects, setGithubProjects] = useState();

  useEffect(() => {
    const fetchGithubProjects = async () => {
      const githubProjectsResponse = await GithubAPI.fetchGithubProjects();
      await setGithubProjects(githubProjectsResponse);
    };

    fetchGithubProjects();
  }, []);

  return (
    <LayoutStyle>
      <h1 style={theme.h1}>Projects</h1>
      <div style={style.container}>
        {githubProjects ? (
          githubProjects.map(project => (
            <Button
              key={project.name}
              style={style.body}
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
        ) : (
          <div style={style.loader}>
            <CircularProgress />
          </div>
        )}
      </div>
    </LayoutStyle>
  );
};

export default ListProjects;
