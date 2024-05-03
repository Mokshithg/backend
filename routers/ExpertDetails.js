const express = require('express')
const router = require('./ExpertRoutes')

const ExpertDetails = require('../controllers/ExpertDetails')

router.get('/expertDetails/:id', ExpertDetails.getDetails);
router.get('/expertDetails', ExpertDetails.getAllExpertDetails);
router.post('/createExpertDetails', ExpertDetails.createExpertProfile);
router.get('/expertDetailid/:id', ExpertDetails.getDetailsid);


module.exports = router;