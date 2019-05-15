var express = require('express');
var api = express.Router();

const fibonacciController = require('../controllers/fibonacciController');

api.post('/fib', fibonacciController.fibonacci);
module.exports = api;
