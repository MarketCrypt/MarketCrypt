const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./apiRouter');
const PORT = 3000;

const CryptoController = require('./CryptoController');
const AccountController = require('./AccountController')
const { send } = require('process');
const { findUser, createUser } = require('./SignupController')


///"start": "NODE_ENV=production node server/server.js",

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// serve index.html on the route '/'
app.use('/api', apiRouter);


app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

app.post('/createAccount', findUser, createUser, (req, res) => {
  res.status(200).json("Created Account!")
})

///////////////// ERROR HANDLERS
app.use("*", (req, res) => {
  return res.status(404).send("Error, path not found");
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



//create account with bcrypt
// app.post('/validateAccount', SignupController.verifyAccount, (req, res) => {
//   const { attemptUsername, attemptPassword } = req.body;
//   console.log(attemptUsername, attemptPassword) 
//   res.status(200).send("grabbed all users!")
// })

app.get('/validateAccount', AccountController.verifyAccount, (req, res) => {
  const { attemptUsername, attemptPassword } = req.body;
  console.log(attemptUsername, attemptPassword) 
  res.status(200).send("grabbed all users!")
})
///////////////// ERROR HANDLERS


app.use("*", (req, res) => {
    return res.status(404).send("Error, path not found");
  });
  

  app.use((err, req, res, next) => {
    const errorObj = {
      log: "global error handler in express app",
      message: { err: "global error handler in express app" },
    };
    const errorObject = Object.assign({}, errorObj, err);
    console.log(errorObject);
    return res.status(500).json(errorObject);
  });
  
/////////////////
  
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
  });
}
  
module.exports = app;
  