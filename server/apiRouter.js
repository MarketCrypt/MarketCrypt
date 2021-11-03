const express = require('express');
const apiRouter = express.Router();
const CryptoController = require('./CryptoController');

apiRouter.get('/crypto', 
    CryptoController.getCrypto,
    (req, res) => {
        return res.status(200).json(res.locals.cryptoData);
    }
);

apiRouter.options('/getData', 
    (req, res) => {
        return res.status(200).send('ok')
    }
);

apiRouter.get('/getData',
    CryptoController.requestCryptoData,
    CryptoController.setCrypto,
    CryptoController.getCrypto,
    (req, res) => {
        res.status(200).json(res.locals.cryptoData);
    }
);

apiRouter.get('/graphData',
    CryptoController.getTopTenCrypto,
    (req, res) => {
        res.status(200).json(res.locals.topTenGraphObject);
    }
);

apiRouter.post('/graphData',
    CryptoController.requestTopTenCryptoData,
    CryptoController.setTopTenCrypto,
    (req, res) => {
        res.status(200).send('ok');
    }
);

module.exports = apiRouter;