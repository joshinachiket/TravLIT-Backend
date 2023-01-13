const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes
router.get('/users', userController.getUsers);
router.post('/login', userController.loginUser);
// router.post('/users', userController.createUser);
// router.put('/users/:id', userController.updateUser);
// router.delete('/users/:id', userController.deleteUser);

module.exports = router;