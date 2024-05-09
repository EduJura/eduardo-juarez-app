const mongoose = require("mongoose");
const Projects = require("./models/projectSchema");
const allProjects = require("../data/projects");
const { initProjectsCollection } = require("./init");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

    // TODO: Move this block below to a separate file
    // Check if the "projects" collection is empty
    const count = await Projects.countDocuments();
    if (count === 0 && allProjects?.projects.length > 0) {
      // If the collection is empty, insert some default data
      await initProjectsCollection(allProjects, Projects);
      console.log("Sample data inserted");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
