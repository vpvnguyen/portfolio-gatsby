import axios from "axios";

const githubUrl = "https://api.github.com";
const githubUser = "vpvnguyen";

const GithubAPI = {
  fetchGithubProjects: async () => {
    try {
      // get repos; 30 results per page; set per_page=100 to query for 100 pages;
      const githubProjects = await axios.get(
        `${githubUrl}/users/${githubUser}/repos?per_page=100`
      );

      const filteredStarredProjects = githubProjects.data.reduce(
        (result, project) => {
          if (project.stargazers_count > 0) result.push(project);
          return result;
        },
        []
      );

      const createProjectsArray = filteredStarredProjects.map(project => {
        return {
          id: project.id,
          name: project.name,
          description: project.description,
          html_url: project.html_url,
          homepage: project.homepage,
          language: project.language,
          created_at: project.created_at,
          updated_at: project.updated_at,
          pushed_at: new Date(project.pushed_at),
        };
      });

      const sortProjectsByDate = createProjectsArray.sort(
        (a, b) => b.pushed_at - a.pushed_at
      );

      return sortProjectsByDate;
    } catch (error) {
      console.error(error.message);
      return new Error("Issue fetching github projects");
    }
  },
  getProjectLanguages: async projectName => {
    try {
      const response = await axios.get(
        `${githubUrl}/repos/${githubUser}/${projectName}/languages`
      );
      return response.data;
    } catch (error) {
      console.error("Issue fetching Github Project languages", error.message);
      return null;
    }
  },
};

export default GithubAPI;
