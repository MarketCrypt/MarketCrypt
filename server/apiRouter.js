const express = require('express');
const apiRouter = express.Router();
const CryptoController = require('./CryptoController');

apiRouter.get('/crypto', (req, res) => {
    return res.status(200).json(res.locals.data);
});

apiRouter.options('/getData', (req, res) => {
    return res.status(200).send('ok')
});

apiRouter.get('/getData', (req, res) => {
    CryptoController.getAllData,
    res.status(200).send(res.locals.cryptoObject)
});

module.exports = apiRouter;