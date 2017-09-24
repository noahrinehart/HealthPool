const express = require('express'),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      mongoose = require('mongoose'),
      config = require('./config/config'),
      router = require('./routes/route');


mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useMongoClient: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'test')
  app.use(logger('dev'));


router.setupRoutes(app);

const server = app.listen(config.port, () => {
  console.log('Server running on port ' + config.port);
});

module.exports = app;
