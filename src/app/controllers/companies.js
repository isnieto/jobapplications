// Load Model and services
const prisma = require("../../../prisma/indexPrisma");
const apiResponse = require("../services/utils.js");

// Retrieve all companys from datadabe
exports.findCompanies = async (req, res) => {
  try {
    const allCompanies = await prisma.company.findMany();
    if (allCompanies.length !== 0) {
      res
        .status(200)
        .json(
          apiResponse({ message: "Companies available", data: allCompanies })
        );
    } else {
      res.status(204).json(apiResponse({ message: "No data found found" }));
    } 
  } catch (error) {
    res.status(404).json(apiResponse({ errors: error }));
  }
};

// Create one company in table company
exports.createCompany = async (req, res) => {
  try {
    let data = req.body;
    await prisma.company.create({ data: { ...data } });
    // Response 201: The request has succeeded and a new resource has been created as a result.
    res.status(201).json(apiResponse({ message: "Company registered" }));
  } catch (error) {
    res.status(404).json(apiResponse({ errors: error }));
  }
};

// Delete a company by Id
exports.deleteCompany = async (req, res) => {
  // Check that the request isn't empty
  try {
    let compId = parseInt(req.params.id);
    let deletedCompany = await prisma.company.delete({
      where: { id: compId },
    });
    res.status(200).json(
      apiResponse({
        message: "Company deleted succesfully",
        data: deletedCompany,
      })
    );
  } catch (error) {
    res.status(404).json(apiResponse({ errors: error }));
  }
};

// Update a company 

exports.updateCompany = async(req, res) => {
  const { id, ...fields} = req.body;
  if (!id) {
    res.status(400).json(
      apiResponse({
        message: "No ID found.",
      })
    );
  }
  try{
    let updatedData = await prisma.user.update({
      where: { id: compId },
      data: { ...fields },
    })
    res.status(200).json(apiResponse({ message: "Company data updated", data: updatedData}));
  } catch (error) {
    res.status(404).json(apiResponse({ errors: error }));
  }
}
