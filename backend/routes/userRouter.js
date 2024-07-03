const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Endpoint pour récupérer un utilisateur par ID
router.get('/user/:id', userController.getUser);

// Endpoint pour modifier un utilisateur par ID
router.patch('/user/:id', userController.modifyUser);

// Endpoint pour supprimer un utilisateur par ID
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
