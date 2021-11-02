const rp = require('request-promise');

const CryptoController = {};


CryptoController.getCrypto = async (req, res, next) => {    
  try{
    //fetch crypto data and set to locals

    //let cryptoArray = []
    //for each data point:
      //cryptoArray.push(${data.id}, ${data.name}.....)
    //cryptoString = cryptoArray.join(',\n')
    const POST_CRYPTO_QUERY = `INSERT INTO crypto (_id, name, symbol, cmc_rank, price, max_supply, circulating_supply, total_supply)\n`
                              //+ cryptoString +';';
    const result = await db.query(POST_CRYPTO_QUERY);

    next();
  }
  catch{
    next({
        log: "Error in Get CV",
        status: 400,
        message: { err: "Error in Get CV" },
      });
  }

};

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