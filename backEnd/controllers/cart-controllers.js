const Item = require('../models/cartSchema');

const removeItem = (req,res,next)=>{
    console.log("in remove");

    res.json({msg:"remove"});
}

const addItem = async(req,res,next)=>{ 
    console.log("in add");
    let items = await Item.find();
    if(items.length>=1){
        console.log("not empty")
    }else{
        console.log(" empty") 
    }
    res.json({msg:items});
}

module.exports = {
    removeItem:removeItem,
    addItem:addItem
}