const express = require('express');
const router = express.Router();
const UserDetails = require('../controllers/UserController');

router.post('/createUserDetails', UserDetails.createUser);
router.get('/getUsers', UserDetails.getUsers);
router.get('/getUserById/:id', UserDetails.getUserById);
router.put('/updateUserById/:id', UserDetails.updateUser);
router.delete('/deleteUser', UserDetails.deleteUser);

module.exports = router;
    