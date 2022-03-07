
const removeItem = (req,res,next)=>{
    console.log("in remove");
    res.json({msg:"remove"});
}

const addItem = (req,res,next)=>{ 
    console.log("in add");
    res.json({msg:"add"});
}

module.exports = {
    removeItem:removeItem,
    addItem:addItem
}