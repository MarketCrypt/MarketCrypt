const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./apiRouter');
const PORT = 3000;

const CryptoController = require('./CryptoController');
const { verifyAccount } = require('./LoginController')
const { send } = require('process');
const { findUser, createUser } = require('./SignupController')


///"start": "NODE_ENV=production node server/server.js",

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9000"); // update to match the domain you will make the request from
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

app.post('/login', verifyAccount, (req, res) => {
  // i forgot why does using .json work and not .send? -KK
  res.status(200).send(json("Verified Account"))
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
  
  
module.exports = app;
  
