const express = require("express");
const router = express.Router();
const Project = require("../db/models/projectSchema");

// GET /api/projects
router.get("/", async (req, res, next) => {
  try {
    let projects = await Project.find();
    projects = {
      "projects": projects
        .map((project) => ({
          ...project?._doc,
          technologies: project.technologies.split(","),
        }))
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
