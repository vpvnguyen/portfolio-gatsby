const express = require("express");
const router = express.Router();

router.get("/projects", async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: `Projects Controller`, route: "/api/projects" });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

router.get("/getAllProjects", async (req, res) => {
  try {
    res.status(200).json({ message: `get all projects` });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

router.post("/addProject", async (req, res) => {
  try {
    const { title, description, demoURL, githubURL } = req.body;
    console.log(title, description, demoURL, githubURL);
    res.status(200).json({ title, description, demoURL, githubURL });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

module.exports = router;
