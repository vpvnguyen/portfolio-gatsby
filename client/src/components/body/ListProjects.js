import React, { useState, useEffect } from "react";
import { Button, LinearProgress } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import LayoutComponent from "../../ui/layout/Layout.component";
import Languages from "./Languages";
import theme from "../../ui/theme";
import MotionStyle from "../../ui/motion";
import GithubAPI from "../../utils/api/github.api";
import useStaticGithubApiQuery from "../../utils/hooks/useStaticGithubApiQuery";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: theme.font.fontFamily
  },
  projectInfo: {
    display: "flex",
    flexDirection: "column",
  },
  projectHeader: theme.h1,
  projectName: theme.h3,
  subtext: {
    fontSize: ".7rem",
  },
  date: {
    fontSize: ".6rem",
    paddingTop: "1.5rem",
    fontStyle: "oblique",
  },
  motionProjectHeader: MotionStyle.fadeInHeadersLeft(),
  motionProject: MotionStyle.animateProject(),
};

const MotionProjectHeader = ({ children }) => (
  <motion.h1
    style={style.projectHeader}
    variants={style.motionProjectHeader}
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
  const [githubProjects, setGithubProjects] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
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
    <LayoutComponent>
      <MotionProjectHeader>
        {loading ? "Loading Projects..." : "Projects"}
      </MotionProjectHeader>
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
                <div style={style.projectInfo}>
                  <h3 style={style.projectName}>
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

                <Languages
                  style={style.subtext}
                  url={data.site.siteMetadata.api.github.url}
                  user={data.site.siteMetadata.api.github.user}
                  projectName={project.name}
                />
              </Button>
            </MotionProject>
          ))
        ) : (
          <LinearProgress />
        )}
      </div>
    </LayoutComponent>
  );
};

export default ListProjects;
