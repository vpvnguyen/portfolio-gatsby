import axios from "axios";

const ProjectsAPI = {
  getAllProjects: () => axios.get("http://localhost:5000/api/getAllProjects"),
  uploadProject: ({ githubUrl, title, description, demoUrl }) =>
    axios.post(`http://localhost:5000/api/upload-project`, {
      githubUrl,
      title,
      description,
      demoUrl,
    }),
};

export default ProjectsAPI;
