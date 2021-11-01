const express = require('express');
const {createUser} = require('../controllers/controller');
const router = express.Router();

router.post('/', createUser, (req, res) => {
  if (res.locals.errorMessage) {
    return res.sendStatus(400);
  }
  return res.sendStatus(200);
})

module.exports = router;