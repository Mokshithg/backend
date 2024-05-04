const express = require('express')
const router = require('./ExpertRoutes')
const ExpertDetails = require('../controllers/ExpertDetails')

// router.get('/expertDetails/:id', ExpertDetails.getDetails);
router.get('/expertAllDetails', ExpertDetails.getAllExpertDetails);
router.post('/createExpertDetails', ExpertDetails.createExpertProfile);
router.get('/expertDetails/:id', ExpertDetails.getDetailsid);
router.get('/expertDetails', ExpertDetails.getAllCards)

module.exports = router;