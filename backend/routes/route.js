const express = require('express'),
      UserController = require('../controllers/user'),
      BetterController = require('../controllers/better'),
      QtumController = require('../controllers/qtum');

exports.setupRoutes = (app) => {
  const apiRoutes = express.Router(),
        betterRoutes = express.Router(),
        userRoutes = express.Router(),
        qtumRoutes = express.Router();

  // /api routes
  apiRoutes.use('/user', userRoutes);
  apiRoutes.use('/better', betterRoutes);
  apiRoutes.use('/qtum', qtumRoutes);

  // /api/account
  userRoutes.get('/', UserController.getUser);
  userRoutes.post('/', UserController.postUser);

  // /api/better
  betterRoutes.get('/practices', BetterController.getPractices);
  betterRoutes.get('/conditions', BetterController.getConditions);
  betterRoutes.get('/specialties', BetterController.getSpecialties);

  // /api/qtum
  qtumRoutes.get('/', QtumController.test);

  app.use('/api', apiRoutes);
}
