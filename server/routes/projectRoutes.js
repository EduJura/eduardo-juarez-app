const express = require("express");
const router = express.Router();
const path = require("path");
const Project = require("../db/models/projectSchema");

// Serve the root page
router.get("/", async (req, res, next) => {
  try {
    console.info("Serving index.html");
    res.sendFile(path.join(__dirname, "../public/index.html")); // Dynamically build the file path
  } catch (error) {
    next(error);
  }
});
// GET /api/projects
router.get("/projects", async (req, res, next) => {
  try {
    let projects = await Project.find();
    projects = {
      projects: projects.map((project) => ({
        ...project?._doc,
        technologies: project.technologies.split(","),
      })),
    };
    
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

// POST /api/projects
router.post("/add", async (req, res, next) => {
  try {
    console.log(req.body);
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
