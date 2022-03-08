const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    quantity:Number,
    price:Number,
    title:String,
    total:Number

})
const Item = mongoose.model("Item",itemSchema);
module.exports = Item;