const express = require('express');
const app = express();
const port = 5000
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
app.use(bodyParser.json());
mongoose.connect
('mongodb+srv://ran:ran232003@cluster0.d2yn9.mongodb.net/cartApp?retryWrites=true&w=majority');
app.use(cors())

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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})