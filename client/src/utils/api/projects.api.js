import axios from "axios";

const ProjectsAPI = {
  getAllProjects: () => axios.get("http://localhost:5000/api/getAllProjects"),
};

export default ProjectsAPI;
