const express = require("express");
const router = express.Router();
const jobsController = require("../controllers/applications");

router.get('/', jobsController.getAll);
router.get('/:id', jobsController.getOneApplication);
router.post('/add', jobsController.addApplication);
router.patch('/', jobsController.updateApplication);
router.delete('/:id', jobsController.deleteApplication); 

module.exports = router;