const express = require("express");
const router = express.Router();
const companiesController = require("../controllers/companies");

router.get('/', companiesController.findCompanies);
router.post('/addone', companiesController.createCompany);
//router.post('/add', jobsController.create);
/* router.get('/:id', auditController.audit_get_byID);
router.post('/', auditController.audit_create);
router.delete('/:id', auditController.audit_delete); */

module.exports = router;