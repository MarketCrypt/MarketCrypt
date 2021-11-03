const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const saltRounds = 10;
db = require('./database')

const SignupController = {};

SignupController.createUser = (req, res, next) => {
  const {attemptUsername, attemptPassword} = req.body;
  // const { canCreateUser } = res.locals;
  
  console.log('Reached create user with', attemptUsername, attemptPassword)
  
  bcrypt.hash(attemptPassword, saltRounds, async (err, hash) => {
    try {
      // if (!canCreateUser)
      await db.query('INSERT INTO authentication (username, password, user_id) VALUES ($1, $2, $3)', [attemptUsername, hash, 1]);
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

SignupController.findUser = async (req, res, next) => {
  const {attemptUsername, attemptPassword} = req.body

  res.locals.canCreateUser = false;

  try {
    if (!attemptUsername || !attemptPassword) throw Error

    const findUsername = await db.query(`SELECT username FROM authentication WHERE username = '${attemptUsername}'`);
    console.log('findusername', findUsername['rows'])
    // // console.log(res.locals.user)
    // //console.log('findusername', findUsername.rows)
    if (!findUsername['rows'].length) {
      return next();
    } else {
      return next({
        log: 'Username already taken!',
        message: {err: 'Username already taken!'},
        status: 409
      });
    }
  } 
  catch(error) {
    return next({
      log: 'Error in validate user!',
      message: {err: 'Error in validate user!'}
    })
  }
}

module.exports = SignupController;