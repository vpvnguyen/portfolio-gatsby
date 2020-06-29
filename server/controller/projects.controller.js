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
    res.status(500).json(`Server error getting projects`);
  }
});

// upload a project
router.post("/upload-project", async (req, res) => {
  try {
    const { title, description, githubUrl, demoUrl } = req.body;

    if (title === "" || description === "" || githubUrl === "") {
      return res.json({
        error: "Title, Description, Github URL should not be empty",
      });
    }

    // add project using ORM
    const newProject = await addProject(title, description, githubUrl, demoUrl);
    res.status(200).json(newProject);
  } catch (error) {
    console.error("/upload-project", error.message);
    res.status(500).json(`Server error creating project`);
  }
});

// delete project by ID
router.delete("/delete-project/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteProject(id);
    res
      .status(200)
      .json({ message: `Project ID:${response} has been deleted` });
  } catch (error) {
    console.error("/delete-project", error.message);
    res.status(500).json(`Server error deleting project`);
  }
});

router.get("/get-all-projects", async (req, res) => {
  try {
    const githubProjects = await getGithubProjects();
    res.status(200).json(githubProjects);
  } catch (error) {
    console.error("/get-all-projects", error.message);
    res.status(500).json(`Server error getting all Github projects`);
  }
});

router.get("/get-github-projects", async (req, res) => {
  try {
    const githubProjects = await getGithubProjects();

    const filteredStarredProjects = githubProjects.reduce((result, project) => {
      if (project.stargazers_count > 0) result.push(project);
      return result;
    }, []);

    const createProjectsArray = filteredStarredProjects.map((project) => {
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

    console.log(sortProjectsByDate);

    res.status(200).json(sortProjectsByDate);
  } catch (error) {
    console.error("/get-github-projects", error.message);
    res.status(500).json(`Server error getting sorted Github projects`);
  }
});

module.exports = router;
