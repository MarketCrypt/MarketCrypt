

const AccountController = {};

AccountController.createAccount = (req, res, next) => {
    const { attemptUsername, attemptPassword }= req.body;
    console.log(attemptUsername, attemptPassword) 
    next();
}

AccountController.verifyAccount = (req, res, next) => {
    const { attemptUsername, attemptPassword } = req.params;
    // loop through our database and see if their exists a user and password as provided from the user
    // if so, set res.locals.user to true or false then send that data back to front end

    // res.locals.user = true or false
    // 

    console.log(attemptUsername, attemptPassword) 
    next();
}

module.exports = AccountController