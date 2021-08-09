// Load modules
const prisma = require("../../../prisma/indexPrisma");
const apiResponse = require("../services/utils.js");

// Retrieve all jobsApplicationss from the database.
exports.getAll = async (req, res) => {
  const allApplications = await prisma.applications.findMany();
  if (allApplications.length !== 0) {
    res
      .status(200)
      .json(apiResponse({ message: "Data found", data: allApplications }));
  } else if (allApplications.length === 0) {
    res.status(204).json(apiResponse({ message: "No data found found" }));
  } else {
    res.status(500).json(apiResponse({ message: "Server error" }));
  }
};

// Create and Save a new jobsApplications
exports.addApplication = async (req, res) => {
  let data = req.body;
  console.log("data", data.subject);

  try {
    let foundApplication = await prisma.applications.findUnique({
      where: {
        subject: data.subject,
      },
    });
    console.log("application", foundApplication);
    if (foundApplication) {
      res.status(400).json(
        apiResponse({
          message: "Sorry, this applications already exists in database",
        })
      );
    } else {
      await prisma.applications.create({ data: { ...data } });
      // Response 201: The request has succeeded and a new resource has been created as a result.
      res
        .status(201)
        .json(
          apiResponse({ message: "New application succesfully registered" })
        );
    }
  } catch (error) {
    res.status(404).json(apiResponse({ errors: error, data: data }));
  }
};

// Find a single jobsApplications with an id
exports.getOneApplication = async (req, res) => {
  try {
    let applicationId = parseInt(req.params.id);
    let getApplication = await prisma.applications.findUnique({
      where: {
        id: applicationId,
      },
    });
    console.log("!!!", getApplication);
    if (!getApplication) {
      res.status(204).json(
        apiResponse({
          message: "Application not found",
          data: getApplication,
        })
      );
    } else {
      res
        .status(200)
        .json(
          apiResponse({ message: "Application found", data: getApplication })
        );
    }
  } catch (error) {
    res.status(400).json(apiResponse({ message: "No data", errors: error }));
  }
};

// Update a jobsApplications by the id in the request
exports.updateApplication = async (req, res) => {
  let fields = req.body;
  if (!fields.id) {
    res.status(400).json(apiResponse({ message: "No id found. ID needed" }));
  }
  try {
    let updatedData = await prisma.applications.update({
      where: { id: fields.id },
      data: { ...fields },
    });
    res
      .status(200)
      .json(
        apiResponse({ message: "Company data updated", data: updatedData })
      );
  } catch (error) {
    res.status(400).json(apiResponse({ message: "Error", errors: error }));
  }
};

// Delete a jobsApplications with the specified id in the request
exports.deleteApplication = async (req, res) => {};

// Delete all jobsApplicationss from the database.
exports.deleteAll = async (req, res) => {};
