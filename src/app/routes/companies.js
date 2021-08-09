const express = require("express");
const router = express.Router();
const companiesController = require("../controllers/companies");


// Routes for company table
router.get('/', companiesController.getAllCompanies);
router.get('/:id', companiesController.getOneCompany);
router.post('/addone', companiesController.createCompany);
router.patch('/company', companiesController.updateCompany);
router.delete('/:id', companiesController.deleteCompany);


module.exports = router;