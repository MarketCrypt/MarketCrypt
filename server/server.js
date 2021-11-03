const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./apiRouter');
const PORT = 3000;


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

app.options('/getPrices', (req, res) => {
  return res.status(200).send('ok')
});

app.get('/getPrices', (req, res) => {
  res.locals.prices = [
    // time 10:00
    {
      "time": "2021-11-03t01:46:40.551Z",
      "btc": 63107.054,
      "eth": 4519.842,
      "bnb": 558.790
    },
    {
      "time": "2021-11-03t01:48:40.551Z",
      "btc": 63107.054,
      "eth": 4467.842,
      "bnb": 594.790
    },
    {
      "time": "2021-11-03t01:50:40.551Z",
      "btc": 64027.054,
      "eth": 4538.842,
      "bnb": 559.790
    },
    {
      "time": "2021-11-03t01:52:40.551Z",
      "btc": 63740.054,
      "eth": 4688.842,
      "bnb": 557.790
    },
    {
      "time": "2021-11-03t01:54:40.551Z",
      "btc": 63365.054,
      "eth": 4599.842,
      "bnb": 547.790
    },
    {
      "time": "2021-11-03t01:56:40.551Z",
      "btc": 63026.054,
      "eth": 4519.842,
      "bnb": 542.790
    },
    {
      "time": "2021-11-03t01:58:40.551Z",
      "btc": 62736.054,
      "eth": 4543.842,
      "bnb": 554.790
    },
    {
      "time": "2021-11-03t01:60:40.551Z",
      "btc": 63225.054,
      "eth": 4600.842,
      "bnb": 558.790
    },
    {
      "time": "2021-11-03t01:62:40.551Z",
      "btc": 62830.054,
      "eth": 4583.842,
      "bnb": 550.790
    },
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
    return res.status(200).json(res.locals.cryptoData)
});


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
  
/////////////////


if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
  });
}
module.exports = app;
