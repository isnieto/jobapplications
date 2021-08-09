const express = require("express");
const router = express.Router();
const jobsController = require("../controllers/applications");

router.get('/', jobsController.getAll);
router.post('/add', jobsController.addOne);
router.get('/:id', jobsController.getOne);
router.patch('/', jobsController.updateOne);
router.delete('/:id', jobsController.deleteOne); 

module.exports = router;