import express from 'express';
import fibonacciController from '../controllers/fibonacciController';

var api = express.Router();

api.post('/fib', fibonacciController.fibonacci);
module.exports = api;
