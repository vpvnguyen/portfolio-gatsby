import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";

import ProjectsAPI from "../../utils/api/projects.api.js";

const style = {
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  buttonGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "10px",
  },
};

const initialState = {
  url: "",
  title: "",
  description: "",
};

const UploadProject = () => {
  const [{ url, title, description }, setProject] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setProject(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("submit");
    try {
      const allProjects = await ProjectsAPI.getAllProjects();
      console.log(allProjects.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleReset = () => {
    setProject({ ...initialState });
    console.log("reset");
  };

  return (
    <div style={style.formGroup}>
      <h1>Upload Project</h1>
      <FormControl>
        <InputLabel htmlFor="project-link">Github URL</InputLabel>
        <Input
          id="project-link-input"
          aria-describedby="project-link-text"
          name="url"
          value={url}
          onChange={handleChange}
        />
        <FormHelperText id="project-link-text">
          "https://github.com/username/myAwesomeProject"
        </FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="project-title">Title</InputLabel>
        <Input
          id="project-title-input"
          aria-describedby="project-title-text"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <FormHelperText id="project-title-text">
          "My Awesome Project"
        </FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="project-description">Description</InputLabel>
        <Input
          id="project-description-input"
          aria-describedby="project-description-text"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <FormHelperText id="project-description-text">
          "Saving the world"
        </FormHelperText>
      </FormControl>

      <div style={style.buttonGroup}>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
};

export default UploadProject;
