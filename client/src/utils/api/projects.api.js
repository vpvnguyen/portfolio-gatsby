import axios from "axios";

const ProjectsAPI = {
  getAllProjects: async () =>
    await axios.get("http://localhost:5000/api/get-all-projects"),
  uploadProject: async ({ title, description, githubUrl, demoUrl }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/upload-project`,
        {
          title,
          description,
          githubUrl,
          demoUrl,
        }
      );
      return response;
    } catch (error) {
      console.error(error.message);
      return console.log("Issue uploading project");
    }
  },
};

export default ProjectsAPI;
