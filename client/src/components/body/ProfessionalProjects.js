import React from "react";
import { Button } from "@material-ui/core";
import theme from "../../ui/theme";
import useStaticProProjectsQuery from "../../utils/hooks/useStaticProProjectsQuery";

const style = {
  proProjectContainer: {
    padding: "1rem",
  },
  proProjectHeader: theme.h1,
  proProjectList: {
    display: "flex",
    flexDirection: "column",
  },
  proProjectButton: {
    fontFamily: theme.font.fontFamily,
  },
};

const ProfessionalProjects = () => {
  const data = useStaticProProjectsQuery();

  return (
    <div style={style.proProjectContainer}>
      <h1 style={style.proProjectHeader}>Professional Projects</h1>
      <div style={style.proProjectList}>
        {data &&
          data.site.siteMetadata.professionalProjects.map(project => (
            <Button
              key={project.name}
              style={style.proProjectButton}
              href={project.url}
              rel="noreferrer"
              target="_blank"
            >
              {project.name}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default ProfessionalProjects;
