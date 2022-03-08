const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    totalPrice:{type:Number,default:0},
    totalItems:{type:Number,default:0}
})

const Cart = mongoose.model("Cart",cartSchema);
module.exports = Cart;