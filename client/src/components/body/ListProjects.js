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
    fontFamily: theme.font.fontFamily,
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

const ProjectTitle = ({ projectName, projectHomepage }) => (
  <h3 style={style.projectName}>
    {projectName}{" "}
    <span>
      {projectHomepage ? (
        <FontAwesomeIcon icon={faGlobe} title="Click me for live demo!" />
      ) : (
        <FontAwesomeIcon
          icon={faCode}
          title="Click me to go to the repository!"
        />
      )}
    </span>
  </h3>
);

const ProjectDescription = ({ projectDescription }) => (
  <div style={style.subtext}>{projectDescription}</div>
);

const ProjectDate = ({ projectDate }) => (
  <div style={style.date}>{dayjs(projectDate).format("MMM-YYYY")}</div>
);

const ProjectButton = ({ children, projectName, projectLink }) => (
  <Button
    key={projectName}
    style={style.body}
    href={projectLink}
    target="_blank"
    rel="noreferrer"
    fullWidth
  >
    {children}
  </Button>
);

const ListProjects = () => {
  const [githubProjects, setGithubProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const data = useStaticGithubApiQuery();

  return (
    <LayoutComponent>
      {/* pull this out */}
      <MotionProjectHeader>
        {loading
          ? "Loading <project type> Projects..."
          : "<project type> Projects"}
      </MotionProjectHeader>
      {/* project container */}
      <div style={style.container}>
        {loading ? (
          <LinearProgress />
        ) : (
          // array
          githubProjects.map(project => (
            //   motion key=projectName
            <MotionProject key={project.name}>
              {/* project button */}
              <ProjectButton
                projectName={project.name}
                projectLink={project.homepage || project.html_url}
              >
                <div style={style.projectInfo}>
                  <ProjectTitle
                    projectName={project.name}
                    projectHomepage={project.homepage}
                  />

                  <ProjectDescription
                    projectDescription={project.description}
                  />

                  <ProjectDate projectDate={project.pushed_at} />
                </div>

                {/* decide whether to use languages or not */}
                <Languages
                  style={style.subtext}
                  url={data.site.siteMetadata.api.github.url}
                  user={data.site.siteMetadata.api.github.user}
                  projectName={project.name}
                />
              </ProjectButton>
            </MotionProject>
          ))
        )}
      </div>
    </LayoutComponent>
  );
};

export default ListProjects;
