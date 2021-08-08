const express = require("express");
const router = express.Router();
const companiesController = require("../controllers/companies");


// Routes
router.get('/', companiesController.findCompanies);
router.post('/addone', companiesController.createCompany);
router.patch('/company', companiesController.updateCompany);
router.delete('/:id', companiesController.deleteCompany);




module.exports = router;