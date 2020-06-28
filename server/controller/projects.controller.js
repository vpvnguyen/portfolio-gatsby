const express = require("express");
const router = express.Router();
const { getGithubProjects } = require("../model/github.api.js");
const {
  getAllProjects,
  addProject,
  deleteProject,
} = require("../model/projects.db.js");

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
  console.log("/upload-project");
  try {
    const { title, description, githubUrl, demoUrl } = req.body;
    console.log("req.body", req.body);
    console.log("title", typeof title);

    if (title === "" || description === "" || githubUrl === "") {
      console.log("something is empty");
      return res.json({
        error: "Title, Description, Github URL should not be empty",
      });
    }

    // add project using ORM
    const newProject = await addProject(title, description, githubUrl, demoUrl);
    res.status(200).json(newProject);
  } catch (error) {
    console.error("/upload-project", error.message);
    res.status(500);
  }
});

// delete project by ID
router.delete("/delete-project/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`/delete-project/${id}`);
    const response = await deleteProject(id);
    res
      .status(200)
      .json({ message: `Project ID:${response} has been deleted` });
  } catch (error) {
    console.error("/delete-project", error.message);
  }
});

router.get("/get-all-projects", async (req, res) => {
  try {
    const githubProjects = await getGithubProjects();
    res.status(200).json(githubProjects);
  } catch (error) {
    console.error("/get-all-projects", error.message);
    res.status(500);
  }
});

router.get("/get-github-projects", async (req, res) => {
  try {
    const githubProjects = await getGithubProjects();

    const filteredStarredProjects = githubProjects.reduce((result, project) => {
      if (project.stargazers_count > 0) result.push(project);
      return result;
    }, []);

    const sortProjectsByDate = filteredStarredProjects.sort(
      (a, b) => b.pushed_at - a.pushed_at
    );

    const projectsArray = sortProjectsByDate.map((project) => {
      return {
        id: project.id,
        name: project.name,
        description: project.description,
        html_url: project.html_url,
        homepage: project.homepage,
        language: project.language,
        created_at: project.created_at,
        updated_at: project.updated_at,
        pushed_at: project.pushed_at,
      };
    });

    res.status(200).json(projectsArray);
  } catch (error) {
    console.error("/get-github-projects", error.message);
    res.status(500);
  }
});

module.exports = router;
