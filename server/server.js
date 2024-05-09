const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connection");
//const Project = require('./db/prjectSchema');
const projectRoutes = require("./routes/projectRoutes");
const PORT = process.env.PORT || 3000;
const apiURL = "/api/v1/projects";
const app = express();

// Connect to MongoDB
connectDB();
// Create Express application
app.use(cors());
// Middleware
app.use(express.json());
// Routes
app.use(apiURL, projectRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
