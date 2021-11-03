const bcrypt = require('bcrypt');
const SignupController = {};
const { Pool } = require('pg');
const saltRounds = 10;
const PSQL_URI = temp;

SignupController.createUser = (req, res, next) => {
  const {username, password, userID} = req.body;
  // const db = new Pool({connectionString: PSQL_URI});

  bcrypt.hash(password, saltRounds, (err, hash) => {
    try {
      db.query('INSERT INTO Auth (username, password, userID) VALUES ($1, $2, $3)', [username, hash, userID]);
      return next();
    }
    catch(error) {
      return next({
        log: 'Error in Create User',
        message: {err: 'Error in Create User' },
      });
    }
  });
};

module.exports = SignupController;