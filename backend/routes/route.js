const AuthController = require('../controllers/auth'),
      AccountController = require('../controllers/account'),
      BetterController = require('../controllers/better'),
      QtumController = require('../controllers/qtum'),
      passportService = require('../config/passport'),
      express = require('express'),
      passport = require('passport');

const checkAuth = passport.authenticate('jwt', { session: false });
const checkLogin = passport.authenticate('local', { session: false });

exports.setupRoutes = (app) => {
  const apiRoutes = express.Router(),
        betterRoutes = express.Router(),
        qtumRoutes = express.Router(),
        accountRoutes = express.Router(),
        authRoutes = express.Router();


  // /api routes
  apiRoutes.use('/auth', authRoutes);
  apiRoutes.use('/account', accountRoutes);
  apiRoutes.use('/better', betterRoutes);
  apiRoutes.use('/qtum', qtumRoutes);

  // /api/account
  accountRoutes.get('/', checkAuth, AccountController.getAccount);
  accountRoutes.delete('/', checkAuth, AccountController.deleteAccount);
  accountRoutes.post('/profile', checkAuth, AccountController.postUpdateProfile);
  accountRoutes.post('/password', checkAuth, AccountController.postUpdatePassword);
  accountRoutes.post('/address', checkAuth, AccountController.postAddAddress);

  // /api/auth routes
  authRoutes.post('/register', AuthController.postRegister);
  authRoutes.post('/login', checkLogin, AuthController.postLogin);

  // /api/better routes
  betterRoutes.get('/practices', checkAuth, BetterController.getPractices);
  betterRoutes.get('/conditions', checkAuth, BetterController.getConditions);
  betterRoutes.get('/specialties', checkAuth, BetterController.getSpecialties);

  // /api/qtum routes
  // /api/qtum/provider
  qtumRoutes.get('/provider/name', QtumController.getProviderName);
  qtumRoutes.get('/provider/total', QtumController.getProviderTotalServicesGiven);
  qtumRoutes.get('/provider/rating', QtumController.getProviderQualityRating);

  // /api/qtum/patient
  qtumRoutes.get('/patient/name', QtumController.getPatientName);
  qtumRoutes.get('/patient/history', QtumController.getPatientMedicalHistory);
  qtumRoutes.get('/patient/status', QtumController.getPatientStatus);


  app.use('/api', apiRoutes);
}
