const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connection");
const path = require("path");
//const Project = require('./db/prjectSchema');
const projectRoutes = require("./routes/projectRoutes");
const PORT = process.env.PORT || 3000;
const apiURL = "/api/v1";
const app = express();

// Connect to MongoDB
connectDB();
// Create Express application
// Specify allowed origins (CORS)
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    //allowedHeaders: ['Content-Type', 'Authorization'], // If you need Headers
    //credentials: true, // If you need to send cookies or credentials
  })
);

// Middleware
app.use(express.json());
// Static file serving (for index.html and other static files)
app.use(express.static(path.join(__dirname, "public")));
// Routes
app.use(apiURL, projectRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
