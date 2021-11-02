const express = require('express');
const controller = require('./controllers');
const apiRouter = express.Router();

apiRouter.get('/crypto',
    controller.getCrypto,
    (req, res) => {
    res.status(200).json(res.locals.data);
});