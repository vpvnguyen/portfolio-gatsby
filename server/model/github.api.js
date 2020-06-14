const axios = require("axios");

const githubApi = {
  getGithubProjects: async () => {
    try {
      // get repos; 30 results per page; set per_page=100 to query for 100 pages;
      const response = await axios.get(
        `https://api.github.com/users/vpvnguyen/repos?per_page=100`
      );
      return response.data;
    } catch (error) {
      return console.error("githubApi.getGithubProjects", error.message);
    }
  },
};

module.exports = githubApi;
