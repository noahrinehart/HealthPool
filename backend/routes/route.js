const AuthController = require('../controllers/auth'),
      AccountController = require('../controllers/account'),
      express = require('express'),
      passportService = require('../config/passport'),
      passport = require('passport');

const checkAuth = passport.authenticate('jwt', { session: false });
const checkLogin = passport.authenticate('local', { session: false });

exports.setupRoutes = (app) => {
  const apiRoutes = express.Router(),
        accountRoutes = express.Router(),
        authRoutes = express.Router();

  // /api routes
  apiRoutes.use('/auth', authRoutes);
  apiRoutes.use('/account', accountRoutes);

  // /api/account
  accountRoutes.get('/', checkAuth, AccountController.getAccount);
  accountRoutes.delete('/', checkAuth, AccountController.deleteAccount);
  accountRoutes.post('/profile', checkAuth, AccountController.postUpdateProfile);
  accountRoutes.post('/password', checkAuth, AccountController.postUpdatePassword);
  accountRoutes.post('/address', checkAuth, AccountController.postAddAddress);

  // /api/auth routes
  authRoutes.post('/register', AuthController.postRegister);
  authRoutes.post('/login', checkLogin, AuthController.postLogin);

  app.use('/api', apiRoutes);
}
