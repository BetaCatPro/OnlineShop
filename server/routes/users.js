let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Goods = require('../models/goods');

mongoose.connect('mongodb://127.0.0.1:27017/dumall');


module.exports = router;