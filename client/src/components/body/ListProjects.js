import React, { useState, useEffect } from "react";
import { Button, Paper, LinearProgress } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import LayoutStyle from "../../ui/layout/Layout.style";
import Languages from "./Languages";
import theme from "../../ui/theme";
import MotionStyle from "../../ui/motion";
import GithubAPI from "../../utils/api/github.api";
import useStaticGithubApiQuery from "../../utils/hooks/useStaticGithubApiQuery";

const style = {
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
  loaderContainer: {
    padding: "40px",
  },
  loader: {
    padding: "40px",
    marginTop: "10px",
  },
  motionHeader: MotionStyle.springUpHeaders(),
  motionProject: MotionStyle.animateProject(),
};

const MotionHeader = ({ children }) => (
  <motion.h1
    style={theme.h1}
    variants={style.motionHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h1>
);

const MotionProject = ({ children }) => (
  <motion.div
    variants={style.motionProject}
    initial={"initial"}
    animate={"animate"}
    whileHover={"whileHover"}
  >
    {children}
  </motion.div>
);

const ListProjects = () => {
  const [githubProjects, setGithubProjects] = useState();
  const data = useStaticGithubApiQuery();

  useEffect(() => {
    const getGithubProjects = async (url, user, pageAmount) => {
      try {
        const githubProjectsResponse = await GithubAPI.fetchGithubProjects(
          url,
          user,
          pageAmount
        );
        await setGithubProjects(githubProjectsResponse);
      } catch (error) {
        await setGithubProjects(null);
      }
    };

    getGithubProjects(
      data.site.siteMetadata.api.github.url,
      data.site.siteMetadata.api.github.user,
      data.site.siteMetadata.api.github.pageAmount
    );
  }, [data]);

  return (
    <LayoutStyle>
      <MotionHeader>Projects</MotionHeader>
      <div style={style.container}>
        {githubProjects ? (
          githubProjects.map(project => (
            <MotionProject>
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
                        <FontAwesomeIcon
                          icon={faGlobe}
                          title="Click me for live demo!"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faCode}
                          title="Click me to go to the repository!"
                        />
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
            </MotionProject>
          ))
        ) : (
          <Paper style={style.loaderContainer}>
            <h3>Loading Projects...</h3>
            <Paper style={style.loader}>
              <LinearProgress />
            </Paper>
            <Paper style={style.loader}>
              <LinearProgress />
            </Paper>
            <Paper style={style.loader}>
              <LinearProgress />
            </Paper>
            <Paper style={style.loader}>
              <LinearProgress />
            </Paper>
          </Paper>
        )}
      </div>
    </LayoutStyle>
  );
};

export default ListProjects;
