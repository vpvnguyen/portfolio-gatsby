const express = require("express");
const router = express.Router();
const { user, getGithubProjects } = require("../model/github.api.js");

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

router.get("/getAllProjects", async (req, res) => {
  try {
    res.status(200).json({ message: `get all projects` });
  } catch (error) {
    console.error("/getAllProjects", error.message);
    res.status(500);
  }
});

router.get("/getGithubProjects", async (req, res) => {
  try {
    const allProjects = await getGithubProjects();

    const projectsArray = allProjects.map((project) => {
      const projects = {
        id: project.id,
        html_url: project.html_url,
        language: project.language,
        created_at: project.created_at,
        updated_at: project.updated_at,
        pushed_at: project.pushed_at,
      };
      return projects;
    });

    res.status(200).json(projectsArray);
  } catch (error) {
    console.error("/getGithubProjects", error.message);
    res.status(500);
  }
});

router.post("/addProject", async (req, res) => {
  try {
    const { title, description, demoURL, githubURL } = req.body;
    console.log(title, description, demoURL, githubURL);
    res.status(200).json({ title, description, demoURL, githubURL });
  } catch (error) {
    console.error("/addProject", error.message);
    res.status(500);
  }
});

module.exports = router;
