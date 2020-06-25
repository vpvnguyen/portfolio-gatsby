const express = require("express");
const router = express.Router();
const { getGithubProjects } = require("../model/github.api.js");
const { getMockData } = require("../model/projects.db.js");

// get mock data
router.get("/get-mock-data", async (req, res) => {
  try {
    const response = await getMockData();
    res.status(200).json(response);
  } catch (error) {
    console.error("/get-mock-data", error.message);
    res.status(500);
  }
});

router.get("/projects", async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: `Projects Controller`, route: "/api/projects" });
  } catch (error) {
    console.error("/projects", error.message);
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

router.post("/upload-project", async (req, res) => {
  try {
    const { githubUrl, title, description, demoUrl } = req.body;
    res.status(200).json({ githubUrl, title, description, demoUrl });
  } catch (error) {
    console.error("/upload-project", error.message);
    res.status(500);
  }
});

module.exports = router;
