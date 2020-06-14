const axios = require("axios");

const githubApi = {
  getGithubProjects: async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/vpvnguyen/repos`
      );
      return response.data;
    } catch (error) {
      return console.error("githubApi.getGithubProjects", error.message);
    }
  },
};

module.exports = githubApi;
