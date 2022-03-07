const express = require('express');
const app = express();
const port = 5000
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const MyError = require('./models/MyError');
app.use(bodyParser.json());
mongoose.connect
('mongodb+srv://ran:ran232003@cluster0.d2yn9.mongodb.net/cartApp?retryWrites=true&w=majority');
app.use(cors())
const cartRoute = require("./routes/cartRoute")
// const myTest = async()=>{
//     const testSchema = mongoose.Schema({
//         name:String
//     })
//     const Test = mongoose.model("Test",testSchema)
//     const newTest = new Test({
//         name:"test"
//     })
//     try{
//         await newTest.save();
//     }catch(e){
    
//     }
// }
// myTest();

app.use("/cart",cartRoute);
app.use((req,res,next)=>{
    error = new MyError("not able to find page",404);
    //error.code = 404;
    next(error);
})

app.use(function(error,req,res,next){
    //console.log(error);
    console.log("error controller",error.message);
    const  errorCode = error.code || 500
    const errorMsg = error.message || "unknown error occurd";
    res.status(errorCode)
    res.json({msg:errorMsg});

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})