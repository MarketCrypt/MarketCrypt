const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const rp = require('request-promise');

///"start": "NODE_ENV=production node server/server.js",

const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': 'e631f17e-ce07-4c1e-bc28-05a06d783d11'
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  console.log('API call response:', response);
}).catch((err) => {
  console.log('API call error:', err.message);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});



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
  