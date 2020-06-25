const pool = require("../config/database");

// Projects ORM
const ProjectsDB = {
  getAllProjects: async () => {
    try {
      const projectsData = await pool.query("SELECT * FROM projects");
      return projectsData.rows;
    } catch (error) {
      console.error("ProjectsDB.getAllProjects", error.message);
    }
  },
  addProject: async (title, description, githubUrl, demoUrl) => {
    try {
      const newProject = await pool.query(
        "INSERT INTO projects (title, description, github_url, demo_url) VALUES ($1, $2, $3, $4) RETURNING *",
        [title, description, githubUrl, demoUrl]
      );
      return newProject.rows[0];
    } catch (error) {
      console.error("ProjectsDB.addProject", error.message);
    }
  },
};

module.exports = ProjectsDB;
