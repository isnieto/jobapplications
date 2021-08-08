// Load modules
const prisma = require("../../../prisma/indexPrisma");
const apiResponse = require("../services/utils.js");

// Create and Save a new jobsApplications
exports.create = (req, res) => {};

// Retrieve all jobsApplicationss from the database.
exports.findAll = async (req, res) => {
  const allApplications = await prisma.applications.findMany();
  console.log("DATA", allApplications);
  if (allApplications.length !== 0) {
    res
      .status(200)
      .json(apiResponse({ message: "Data found", data: allApplications }));
  } else if (allApplications.length === 0) {
    res.status(204).json(apiResponse({ message: "No data found found" }));
  } else {
    res.status(500).json({ message: "Server error" });
  }
};

// Find a single jobsApplications with an id
exports.findOne = (req, res) => {};

// Update a jobsApplications by the id in the request
exports.update = (req, res) => {};

// Delete a jobsApplications with the specified id in the request
exports.delete = (req, res) => {};

// Delete all jobsApplicationss from the database.
exports.deleteAll = (req, res) => {};
