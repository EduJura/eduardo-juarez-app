const initProjectsCollection = async (data, projectsSchema) => {
  return await projectsSchema.insertMany(
    data?.projects.map((project) => ({
      ...project,
      technologies: project.technologies.join(","),
    }))
  );
}

module.exports = { initProjectsCollection };
