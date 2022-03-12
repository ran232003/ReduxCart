const Cart2 = require('../models/cart-schema2');
const Cart = require('../models/cartSchema');
const Item = require('../models/itemSchema');

const removeItem = async(req,res,next)=>{
    console.log("in remove");
    let {title,quantity,total,price} = req.body;
    let item = await Item.findOne({title:title})
    let cart = await Cart.findOne();
    if(item.quantity == 1){
        

        await Item.deleteOne({title:title})
    }
    else{
        item.quantity--;
        item.total = item.total - price;
        await item.save()
    }
    cart.totalItems = cart.totalItems -1
    cart.totalPrice = cart.totalPrice - price;
    await cart.save()
    console.log(cart);

    res.json({msg:"remove"});
}

const addItem = async(req,res,next)=>{ 
    console.log("in add");
    let {title,quantity,total,price} = req.body;
    console.log(title,quantity,total,price)
    let items = await Item.find();
    let cart = await Cart.findOne();
    console.log("before",cart)
    
    if(items.length<1){
        items = new Item({
            price:price,
            quantity:1,
            total:price,
            title:title
        })
        console.log(cart)
        cart.totalPrice = cart.totalPrice + price;
        cart.totalItems = cart.totalItems + 1;
        console.log(cart)
        await items.save();
        await cart.save(function(){});
    }else{
        let flag = false;
        console.log("items else")
            for(var i = 0; i < items.length; i++){
                if(items[i].price == price && items[i].title == title){
                    flag = true;
                   t = items[i].total + items[i].price;
                   q = items[i].quantity +1;
                   
          
                   console.log("cart1",cart)
                   cart.totalItems = cart.totalItems +1;
                   cart.totalPrice = cart.totalPrice + price;
                   await cart.save();
                   console.log("cart2",cart.totalItems)
                   await Item.updateOne({ title:title }, { quantity: q,total:t });
                   console.log("cart",cart)
                    break;
                }
            }
            if(flag == false){
                items = new Item({
                    price:price,
                    quantity:1,
                    total:price,
                    title:title
                })
                cart.totalItems = cart[0].totalItems +1;
                cart.totalPrice = cart[0].totalPrice + price;
                await items.save();
                await cart.save();
            }
            console.log("items")
            console.log(items)
            // await items.save(function(){});
            // await cart.save(function(){}); 

    }
    res.json({cart:cart});
}
const toggleCart = async(req,res,next)=>{
    let cart = await Cart.findOne();
    console.log(cart.toggle);
    if(typeof cart.toggle == "undefined"){
        //create cart
        console.log(" empty");
        cart = new Cart({
            totalPrice:0,
            totalItems:0,
            toggle:true
        })
    }
    else{
        cart.toggle = !cart.toggle
        //change toggle
        console.log("change toggle")
    }
    await cart.save();
    res.json({msg:cart.toggle});
}
const checkCart = async(req,res,next)=>{
    let cart = await Cart.findOne();
    console.log(cart);
    if(!cart){
        //create cart
        console.log(" empty");
        cart = new Cart({
            totalPrice:0,
            totalItems:0,
            toggle:true
        })
        await cart.save();
    }
    res.json({totalPrice:0,totalItems:0,toggle:true});
}
const create2 = async (req,res,next)=>{
    const {state} = req.body;
    console.log("ss",state)
    let cart = await Cart2.findOne();
    if(!cart){
        console.log(" empty");
        cart = new Cart2({
            totalPrice:0,
            totalItems:0,
            visible:true,
            items:[]
        })
        await cart.save();
    }
    res.json({cart:cart});
}
const toggle2 = async(req,res,next)=>{
    
}
const removeItem2 = async(req,res,next)=>{
    const {cart,price,title} = req.body;
    let cartDB = await Cart2.findOne();
    const obj = cart.items.find((item)=>{
        return item.title == title
    })
    if(obj.quantity == 1){
        const check =  await Cart2.updateOne({ "items.title": title }, { "$pull": { "items": { "title": title } }})
        cartDB.totalItems = cartDB.totalItems - 1;
        cartDB.totalPrice = cartDB.totalPrice - price
    }
    else{
        let quantity = obj.quantity;
        let total = obj.total
        cartDB.totalItems = cartDB.totalItems - 1;
        cartDB.totalPrice = cartDB.totalPrice - price
   const check =  await Cart2.updateOne({"items.title": title}, 
        {'$set': {
        'items.$.total': total - price,
        'items.$.quantity': quantity - 1
    }})
    }
    res.json({status:"ok"})

}
const addItem2 = async(req,res,next)=>{
    const {cart,price,title} = req.body;
    
    const obj = cart.items.find((item)=>{
        return item.title == title
    })
    console.log("cart",cart)
    console.log("o",obj)
    let cartDB = await Cart2.findOne();
    
    if(cartDB.items.length<1 || !obj){
        let objItem = {quantity:1,total:price,price:price,title:title}
        cartDB.items.push(objItem);
        
        cartDB.totalItems = cartDB.totalItems + 1;
        cartDB.totalPrice = cartDB.totalPrice + price
        cartDB.save();
    }
    else{
       
    let quantity = obj.quantity;
        let total = obj.total
   const check =  await Cart2.updateOne({"items.title": title}, 
        {'$set': {
        'items.$.total': total + price,
        'items.$.quantity': quantity + 1
    }})
    cartDB.totalItems = cartDB.totalItems + 1;
        cartDB.totalPrice = cartDB.totalPrice + price
        cartDB.save();
}
     //console.log(check)
    //await cartDB.save();
    
    
    res.json({cartDB});
    
}

module.exports = {
    removeItem:removeItem,
    addItem:addItem,
    toggleCart:toggleCart,
    checkCart:checkCart,
    addItem2:addItem2,
    create2:create2,
    toggle2:toggle2,
    removeItem2:removeItem2
}