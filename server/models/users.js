let mongoose = require('mongoose');
let Schema = mongoose.Schema

let userSchema = new Schema({
  'userId': String,
  'userName': String,
  'userPwd': String,
  'orderList': Array,
  'cartList': [
  	'productId': String,
  	'productName': String,.
  	'productImage': String,
  	'salePrice': String,
  	'checked': String,
  	'productNum': String
  ]
});

module.exports = mongoose.model('User', userSchema);