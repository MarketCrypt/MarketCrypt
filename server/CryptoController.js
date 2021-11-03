const rp = require('request-promise');
db = require('./database')

const CryptoController = {};

CryptoController.getCrypto = async (req, res, next) => {
  try{
    const GET_CRYPTO_QUERY = 'SELECT * FROM crypto';
    const result = await db.query(GET_CRYPTO_QUERY);
    res.locals.cryptoData = result['rows'];
    next();
  }
  catch{
    next({
        log: "Error in Save Crypto",
        status: 400,
        message: { err: "Error in Save Crypto" },
      });
  }
};

CryptoController.setCrypto = async (req, res, next) => {    
  try{
    const cryptoArray = [];
    const data = res.locals.cryptoObject;
    for(let i = 0; i < data.length; i++){
      cryptoArray.push(`(${data[i]['id']}, '${data[i]['name']}', '${data[i]['symbol']}', ${data[i]['cmc_rank']}, ${data[i]['quote']['USD']['price']}, ${data[i]['max_supply']}, ${data[i]['circulating_supply']}, ${data[i]['total_supply']})`)
    }
    const cryptoString = cryptoArray.join(',\n')
    const SET_CRYPTO_QUERY = `INSERT INTO crypto (_id, name, symbol, cmc_rank, price, max_supply, circulating_supply, total_supply)\n`+
                              'VALUES ' + cryptoString + ';';
    await db.query('DELETE FROM crypto;');
    const result = await db.query(SET_CRYPTO_QUERY);

    next();
  }
  catch{
    next({
        log: "Error in Save Crypto",
        status: 400,
        message: { err: "Error in Save Crypto" },
      });
  }

};

CryptoController.requestCryptoData = (req, res, next) => {
  try {
    const requestOptions = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        'start': '1',
        'limit': '1000',
        'convert': 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': 'e631f17e-ce07-4c1e-bc28-05a06d783d11'
      },
      json: true,
      gzip: true
    };
    rp(requestOptions).then(response => {
      // console.log('API call response:', response[0]);
      res.locals.cryptoObject = response.data;
      // console.log('response[0]', response)
      return next(); 
    }).catch((err) => {
      console.log('API call error inside CryptoController.requestCryptoData:', err);
      return next(); 
    });
  } catch (error) {
      console.log('Error in CryptoControsller.requestCryptoData: ', error);
  }
}

CryptoController.requestTopTenCryptoData = (req, res, next) => {
  try {
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
    rp(requestOptions).then(response => {
      // console.log('API call response:', response[0]);
      res.locals.topTenCryptoObject = response.data;
      // console.log('response[0]', response)
      return next(); 
    }).catch((err) => {
      console.log('API call error inside CryptoController.requestTopTenCryptoData:', err);
      return next(); 
    });
  } catch (error) {
      console.log('Error in CryptoControsller.requestTopTenCryptoData: ', error);
  }
}

CryptoController.setTopTenCrypto = async (req, res, next) => {    
  try{
    const data = res.locals.topTenCryptoObject;
    let btcPrice, ethPrice, bnbPrice;
    for (let i = 0; i < data.length; i++){
      if(data[i]['id']==1) btcPrice = data[i]['quote']['USD']['price'];
      else if(data[i]['id']==1027) ethPrice = data[i]['quote']['USD']['price'];
      else if(data[i]['id']==1839) bnbPrice = data[i]['quote']['USD']['price'];
    }
    const event = new Date();

    const jsonDate = event.toJSON();
    const SET_CRYPTO_QUERY = `INSERT INTO top_three_history (time, btc, eth, bnb)\n`+
                              `VALUES ('${jsonDate}', ${btcPrice}, ${ethPrice}, ${bnbPrice});`;
    await db.query(SET_CRYPTO_QUERY);
    next();
  }
  catch{
    next({
        log: "Error in Save Crypto",
        status: 400,
        message: { err: "Error in Save Crypto" },
      });
  }

};

CryptoController.getTopTenCrypto = async (req, res, next) => {    
  try{
    const GET_CRYPTO_QUERY = `SELECT * FROM top_three_history`;
    const result = await db.query(GET_CRYPTO_QUERY);
    res.locals.topTenGraphObject = result['rows'];
    next();
  }
  catch{
    next({
        log: "Error in Get Top Ten Crypto",
        status: 400,
        message: { err: "Error in Get Top Ten Crypto" },
      });
  }

};

module.exports = CryptoController;