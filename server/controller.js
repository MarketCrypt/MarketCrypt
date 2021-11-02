db = require('./database')

const controller = {};

controller.getCrypto = async (req, res, next) => {    
    
  
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