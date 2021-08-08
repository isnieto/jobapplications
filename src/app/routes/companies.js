const express = require("express");
const router = express.Router();
const companiesController = require("../controllers/companies");


// Routes
router.get('/', companiesController.findCompanies);
router.post('/addone', companiesController.createCompany);
//router.post('/add', jobsController.create);
router.delete('/:id', companiesController.deleteCompany);




module.exports = router;