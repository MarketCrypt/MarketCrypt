const LoginController = {};
const bcrypt = require('bcrypt');
db = require('./database');

LoginController.verifyAccount = async (req, res, next) => {
    try {
        const { attemptUsername, attemptPassword } = req.body;
        const result = await db.query(`SELECT password FROM authentication WHERE username = '${attemptUsername}'`);
        const hashPassword = result['rows'][0]['password'];
        
        bcrypt.compare(attemptPassword, hashPassword, (err, result) => {
            if (result === false) {
                return next({
                    log: 'Password is incorrect!',
                    message:  {err: 'Password is incorrect!'},
                    status: 401
                });
            }
        })
        return next();
    }
    catch (error) {
        return next({
            log: 'Error in verify account',
            message: {err: 'Error in verify Account'}
        });
    }
    
}

module.exports = LoginController