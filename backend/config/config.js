const dotenv = require('dotenv'),
      path = require('path');
dotenv.config({path: path.join(__dirname, '../.env')});

module.exports = {
  'secret': process.env.JWT_SECRET,
  'database': process.env.DATABASE_URI,
  'port': process.env.PORT,
  'betterApiKey': process.env.BETTER_KEY
}
