const rp = require('request-promise');

const CryptoController = {};

CryptoController.getAllData = (req, res, next) => {
  try {
      rp(requestOptions).then(response => {
        // console.log('API call response:', response[0]);
        res.locals.cryptoObject = response.data;
        console.log('response[0]', response)
        return next(); 
      }).catch((err) => {
        console.log('API call error inside CryptoController.getAllData:', err);
        return next(); 
      });
  } catch (error) {
      console.log('Error in CryptoControsller.getAllData: ', error);
  }
}

const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '10',
      'convert': 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': 'e631f17e-ce07-4c1e-bc28-05a06d783d11'
    },
    json: true,
    gzip: true
  };

module.exports = CryptoController;