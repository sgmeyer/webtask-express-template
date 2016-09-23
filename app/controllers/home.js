var express = require('express');
var router = express();

function get(req, res) {
  res.status(200).send('Hello!').end();
}

router.get('/', get);

module.exports = router;
