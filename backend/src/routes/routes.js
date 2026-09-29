const express = require('expres');
const ProfileController = require('../controllers/ProfileController');
const routes = express.Router();


routes.get('/profile/:id', ProfileController.getProfile);

routes.post('/profile/:id/cards', ProfileController.createCards);

module.exports = routes