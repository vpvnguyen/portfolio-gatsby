import axios from "axios";

const GithubAPI = {
  getGithubProjects: async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/get-github-projects`
      );
      return response.data;
    } catch (error) {
      console.error(error.message);
      return console.log("Issue fetching Github Projects");
    }
  },
  getProjectLanguages: async projectName => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/vpvnguyen/${projectName}/languages`
      );
      return response.data;
    } catch (error) {
      console.error("Issue fetching Github Project languages", error.message);
      return null;
    }
  },
};

export default GithubAPI;
