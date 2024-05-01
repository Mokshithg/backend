const express = require('express')
const router = require('./ExpertRoutes')

const ExpertDetails = require('../controllers/ExpertDetails')

router.get('/expertDetails/:id', ExpertDetails.getDetails);
router.get('/expertDetails', ExpertDetails.getAllExpertDetails);
router.post('/createExpertDetails', ExpertDetails.createExpertProfile);


module.exports = router;