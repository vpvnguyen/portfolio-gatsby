import React, { useState, useEffect } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import dayjs from "dayjs";
import LayoutStyle from "../../ui/layout/Layout.style";
import Languages from "./Languages";
import theme from "../../ui/theme";
import GithubAPI from "../../utils/api/github.api.js";
import useStaticGithubApiQuery from "../../utils/hooks/useStaticGithubApiQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";

const style = {
  loader: {
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
    padding: "0px 10px 25px 10px",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  subtext: {
    fontSize: ".7rem",
  },
  date: {
    fontSize: ".6rem",
    paddingTop: "1.5rem",
    fontStyle: "oblique",
  },
};

const ListProjects = () => {
  const [githubProjects, setGithubProjects] = useState();
  const data = useStaticGithubApiQuery();

  useEffect(() => {
    const getGithubProjects = async (url, user, pageAmount) => {
      const githubProjectsResponse = await GithubAPI.fetchGithubProjects(
        url,
        user,
        pageAmount
      );
      await setGithubProjects(githubProjectsResponse);
    };

    getGithubProjects(
      data.site.siteMetadata.api.github.url,
      data.site.siteMetadata.api.github.user,
      data.site.siteMetadata.api.github.pageAmount
    );
  }, [data]);

  return (
    <LayoutStyle>
      <h1 style={theme.h1}>Projects</h1>
      <div style={style.container}>
        {githubProjects ? (
          githubProjects.map(project => (
            <Button
              key={project.name}
              style={style.body}
              href={project.homepage || project.html_url}
              target="_blank"
              rel="noreferrer"
              fullWidth
            >
              <div style={style.left}>
                <h3 style={theme.h3}>
                  {project.name}{" "}
                  <span>
                    {project.homepage ? (
                      <FontAwesomeIcon icon={faGlobe} />
                    ) : (
                      <FontAwesomeIcon icon={faCode} />
                    )}
                  </span>
                </h3>

                <div style={style.subtext}>{project.description}</div>
                <div style={style.date}>
                  {dayjs(project.pushed_at).format("MMM-YYYY")}
                </div>
              </div>

              <div style={style.right}>
                <Languages
                  style={style.subtext}
                  url={data.site.siteMetadata.api.github.url}
                  user={data.site.siteMetadata.api.github.user}
                  projectName={project.name}
                />
              </div>
            </Button>
          ))
        ) : (
          <div style={style.loader}>
            <h3>Loading Projects...</h3>
            <CircularProgress />
          </div>
        )}
      </div>
    </LayoutStyle>
  );
};

export default ListProjects;
