const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/CoronaProject",()=>{
    console.log("connect DB !!!");

})
