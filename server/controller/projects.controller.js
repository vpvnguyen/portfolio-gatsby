const express = require("express");
const router = express.Router();
const { getGithubProjects } = require("../model/github.api.js");
const { getAllProjects, addProject } = require("../model/projects.db.js");

// get all projects
router.get("/projects", async (req, res) => {
  try {
    const response = await getAllProjects();
    res.status(200).json(response);
  } catch (error) {
    console.error("/projects", error.message);
    res.status(500);
  }
});

// upload a project
router.post("/upload-project", async (req, res) => {
  try {
    const { title, description, githubUrl, demoUrl } = req.body;
    // add project using ORM
    const newProject = await addProject(title, description, githubUrl, demoUrl);
    res.status(200).json(newProject);
    // res.status(200).json({ title, description, githubUrl, demoUrl });
  } catch (error) {
    console.error("/upload-project", error.message);
    res.status(500);
  }
});

router.get("/get-all-projects", async (req, res) => {
  try {
    res.status(200).json({ message: `get all projects` });
  } catch (error) {
    console.error("/get-all-projects", error.message);
    res.status(500);
  }
});

router.get("/get-github-projects", async (req, res) => {
  try {
    const githubProjects = await getGithubProjects();

    const projectsArray = githubProjects.map((project) => {
      return (projects = {
        id: project.id,
        html_url: project.html_url,
        language: project.language,
        created_at: project.created_at,
        updated_at: project.updated_at,
        pushed_at: project.pushed_at,
      });
    });

    res.status(200).json(projectsArray);
  } catch (error) {
    console.error("/get-github-projects", error.message);
    res.status(500);
  }
});

module.exports = router;
