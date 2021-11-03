const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./apiRouter');
export const PORT = 3000;


///"start": "NODE_ENV=production node server/server.js",

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
  });
}
  
  

// serve index.html on the route '/'
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

app.options('/getPrices', (req, res) => {
  return res.status(200).send('ok')
});

app.get('/getPrices', (req, res) => {
  res.locals.prices = [
    // time 10:00
    {
      1:{name: 'bitcoin', price: 7863723},
      2: {name: 'ethereum', price: 2322},
      3: {name: 'binance_coin', price: 234}
    },
    // time 10:10
    {
      1:{name: 'bitcoin', price: 7294460},
      2: {name: 'ethereum', price: 1352},
      3: {name: 'binance_coin', price: 84}
    },
    // time: 10:20
    {
      1:{name: 'bitcoin', price: 1034043},
      2: {name: 'ethereum', price: 3059},
      3: {name: 'binance_coin', price: 102}
    },
    {
      1:{name: 'bitcoin', price: 4389248},
      2: {name: 'ethereum', price: 5384},
      3: {name: 'binance_coin', price: 1340}
    },
    {
      1:{name: 'bitcoin', price: 7703489},
      2: {name: 'ethereum', price: 6943},
      3: {name: 'binance_coin', price: 345}
    },
    {
      1:{name: 'bitcoin', price: 3989920},
      2: {name: 'ethereum', price: 4893},
      3: {name: 'binance_coin', price: 779}
    },
    {
      1:{name: 'bitcoin', price: 2982985},
      2: {name: 'ethereum', price: 5930},
      3: {name: 'binance_coin', price: 94}
    },
    {
      1:{name: 'bitcoin', price: 2984298},
      2: {name: 'ethereum', price: 4382},
      3: {name: 'binance_coin', price: 492}
    },    {
      1:{name: 'bitcoin', price: 3985420},
      2: {name: 'ethereum', price: 3985},
      3: {name: 'binance_coin', price: 3029}
    },    {
      1:{name: 'bitcoin', price: 2095204},
      2: {name: 'ethereum', price: 2849},
      3: {name: 'binance_coin', price: 2184}
    },    {
      1:{name: 'bitcoin', price: 3289252},
      2: {name: 'ethereum', price: 39284},
      3: {name: 'binance_coin', price: 1398}
    }
  ]
  console.log('object  stored in /getprices');
  return res.status(200).json(res.locals.prices)
});

// Currently being used to send API response to frontend
app.get('/getData', (req, res) => {
  res.locals.cryptoData = {
    status: {
      timestamp: '2021-11-02T02:23:28.284Z',
      error_code: 0,
      error_message: null,
      elapsed: 16,
      credit_count: 1,
      notice: null,
      total_count: 6942
    },
    data: [
      {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        slug: 'bitcoin',
        num_market_pairs: 8463,
        date_added: '2013-04-28T00:00:00.000Z',
        tags: [Array],
        max_supply: 21000000,
        circulating_supply: 18861218,
        total_supply: 18861218,
        platform: null,
        cmc_rank: 1,
        last_updated: '2021-11-02T02:22:02.000Z',
        quote: [Object]
      },
      {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        num_market_pairs: 4639,
        date_added: '2015-08-07T00:00:00.000Z',
        tags: [Array],
        max_supply: null,
        circulating_supply: 118172272.499,
        total_supply: 118172272.499,
        platform: null,
        cmc_rank: 2,
        last_updated: '2021-11-02T02:22:02.000Z',
        quote: [Object]
      },
      {
        id: 1839,
        name: 'Binance Coin',
        symbol: 'BNB',
        slug: 'binance-coin',
        num_market_pairs: 543,
        date_added: '2017-07-25T00:00:00.000Z',
        tags: [Array],
        max_supply: 166801148,
        circulating_supply: 166801148,
        total_supply: 166801148,
        platform: null,
        cmc_rank: 3,
        last_updated: '2021-11-02T02:21:12.000Z',
        quote: [Object]
      },
      {
        id: 825,
        name: 'Tether',
        symbol: 'USDT',
        slug: 'tether',
        num_market_pairs: 18931,
        date_added: '2015-02-25T00:00:00.000Z',
        tags: [Array],
        max_supply: null,
        circulating_supply: 70545760760.65137,
        total_supply: 71357845272.48163,
        platform: [Object],
        cmc_rank: 4,
        last_updated: '2021-11-02T02:21:21.000Z',
        quote: [Object]
      },
      {
        id: 2010,
        name: 'Cardano',
        symbol: 'ADA',
        slug: 'cardano',
        num_market_pairs: 304,
        date_added: '2017-10-01T00:00:00.000Z',
        tags: [Array],
        max_supply: 45000000000,
        circulating_supply: 33270344508.709,
        total_supply: 33676945631.8,
        platform: null,
        cmc_rank: 5,
        last_updated: '2021-11-02T02:21:21.000Z',
        quote: [Object]
      },
      {
        id: 5426,
        name: 'Solana',
        symbol: 'SOL',
        slug: 'solana',
        num_market_pairs: 176,
        date_added: '2020-04-10T00:00:00.000Z',
        tags: [Array],
        max_supply: null,
        circulating_supply: 300941215.0239728,
        total_supply: 507977816.4365074,
        platform: null,
        cmc_rank: 6,
        last_updated: '2021-11-02T02:22:04.000Z',
        quote: [Object]
      },
      {
        id: 52,
        name: 'XRP',
        symbol: 'XRP',
        slug: 'xrp',
        num_market_pairs: 638,
        date_added: '2013-08-04T00:00:00.000Z',
        tags: [Array],
        max_supply: 100000000000,
        circulating_supply: 47015237181,
        total_supply: 99990181120,
        platform: null,
        cmc_rank: 7,
        last_updated: '2021-11-02T02:22:03.000Z',
        quote: [Object]
      },
      {
        id: 6636,
        name: 'Polkadot',
        symbol: 'DOT',
        slug: 'polkadot-new',
        num_market_pairs: 241,
        date_added: '2020-08-19T00:00:00.000Z',
        tags: [Array],
        max_supply: null,
        circulating_supply: 987579314.957085,
        total_supply: 1103303471.382273,
        platform: null,
        cmc_rank: 8,
        last_updated: '2021-11-02T02:22:06.000Z',
        quote: [Object]
      },
      {
        id: 5994,
        name: 'SHIBA INU',
        symbol: 'SHIB',
        slug: 'shiba-inu',
        num_market_pairs: 150,
        date_added: '2020-08-01T00:00:00.000Z',
        tags: [Array],
        max_supply: null,
        circulating_supply: 549095509738353,
        total_supply: 589738956207003.8,
        platform: [Object],
        cmc_rank: 9,
        last_updated: '2021-11-02T02:21:21.000Z',
        quote: [Object]
      },
      {
        id: 74,
        name: 'Dogecoin',
        symbol: 'DOGE',
        slug: 'dogecoin',
        num_market_pairs: 393,
        date_added: '2013-12-15T00:00:00.000Z',
        tags: [Array],
        max_supply: null,
        circulating_supply: 131943568830.3418,
        total_supply: 131943568830.3418,
        platform: null,
        cmc_rank: 10,
        last_updated: '2021-11-02T02:22:03.000Z',
        quote: [Object]
      }
    ]
}
});

module.exports = app;

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
  
  
/////////////////




