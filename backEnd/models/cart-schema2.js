const mongoose = require("mongoose");

cartSchema2 = mongoose.Schema({
    items:[],
    visible:Boolean,
    totalPrice:Number,
    totalItems:Number
})

const Cart2 = mongoose.model("Cart2",cartSchema2);

module.exports = Cart2;