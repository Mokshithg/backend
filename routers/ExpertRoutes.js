const express = require('express');
const router = express.Router();
const ExpertController = require('../controllers/ExpertController');

router.get('/technical-experts', ExpertController.getAllExperts);
router.get('/technical-experts/:id', ExpertController.getExpertsById);
router.post('/new-technicalExpert', ExpertController.addExperts);
router.put('/updated_expert/:id', ExpertController.updateExpert);
router.delete('/delete_expert/:id', ExpertController.deleteExpert);

module.exports = router;