const express = require('express');
const router = express.Router();
var request = require('request');

router.route('/getData')
  .get(function(req, res) {
  	request(' https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js', (req, err, body) => {
  		res.send(body)
  	})
  })

module.exports = router;