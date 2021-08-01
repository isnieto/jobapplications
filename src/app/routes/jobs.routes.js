//const router = require("express").Router();
const express = require("express");
const router = express.Router();
const jobsController = require("../controllers/jobs.controller");

router.get('/', jobsController.findAll);
/* router.get('/:id', auditController.audit_get_byID);
router.post('/', auditController.audit_create);
router.delete('/:id', auditController.audit_delete); */

module.exports = router;