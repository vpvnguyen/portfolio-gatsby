import axios from "axios";

const filterByStarredProjects = projects =>
  projects.reduce((result, project) => {
    if (project.stargazers_count > 0) result.push(project);
    return result;
  }, []);

const createProjectStructure = projects =>
  projects.map(project => ({
    id: project.id,
    name: project.name,
    description: project.description,
    html_url: project.html_url,
    homepage: project.homepage,
    language: project.language,
    created_at: project.created_at,
    updated_at: project.updated_at,
    pushed_at: new Date(project.pushed_at),
  }));

const sortProjectsByDateDesc = projects =>
  projects.sort((a, b) => b.pushed_at - a.pushed_at);

const GithubAPI = {
  fetchGithubProjects: async (url, user) => {
    try {
      // get repos; 30 results per page; set per_page=100 to query for 100 pages;
      const githubProjects = await axios.get(
        `${url}/users/${user}/repos?per_page=100`
      );
      const starredProjects = filterByStarredProjects(githubProjects.data);
      const structuredProjects = createProjectStructure(starredProjects);
      const sortedProjects = sortProjectsByDateDesc(structuredProjects);

      return sortedProjects;
    } catch (error) {
      console.error(error.message);
      return new Error("Issue fetching github projects");
    }
  },
  fetchProjectLanguages: async (url, user, projectName) => {
    try {
      const projectLanguages = await axios.get(
        `${url}/repos/${user}/${projectName}/languages`
      );
      return projectLanguages.data;
    } catch (error) {
      console.error("Issue fetching Github Project languages", error.message);
      return null;
    }
  },
};

export default GithubAPI;
