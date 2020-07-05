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
};

export default GithubAPI;
