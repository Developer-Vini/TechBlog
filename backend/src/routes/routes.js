const express = require('expres');
const routes = express.Router();

const ProfileController = require('../controllers/ProfileController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth')


routes.post('/register', authController.register);
routes.post('/login', authController.login)

routes.get('/profile/:id', ProfileController.getProfile);

routes.post('/profile/:id/cards', authMiddleware, ProfileController.createCards);

module.exports = routes