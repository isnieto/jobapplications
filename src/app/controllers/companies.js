// Load Model and services
const prisma = require("../../../prisma/indexPrisma");
const apiResponse = require("../services/utils.js");

// Retrieve all companys from datadabe

exports.findCompanies = async (req, res) => {
  const allCompanies = await prisma.company.findMany();
  if (allCompanies.length !== 0) {
    res
      .status(200)
      .json(
        apiResponse({ message: "Companies available", data: allCompanies })
      );
  } else if (allCompanies.length === 0) {
    res.status(204).json(apiResponse({ message: "No data found found" }));
  } else {
    res.status(500).json(apiResponse({ message: "Server error" }));
  }
};

exports.createCompany = async (req, res) => {

  let data = req.body;
  let compData = await prisma.company.create({data: {...data}})
  res.status(200).json(apiResponse({message: "Company registered"}))
  //console.log("DATA", compData)

}
