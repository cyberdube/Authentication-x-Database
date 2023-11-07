const mongoose =require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/test");

// const app = express();

// mongoose.connect("mongodb://localhost:27017/test")

connect.then(()=>{
    console.log("Database Connected");
})

.catch(()=>{
    console.log("Not Connected");
})

const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
    required: true 
    },
    password:{
        type: String,
        required: true 
    }
   
});

const collection= new mongoose.model("users",LoginSchema);

// app.get("/getUsers",(req,req)=> {
//     UserModel.find({}).then(function(users){
//         res.json(users)
//     }).catch(function(err){
//         console.log(err)
//     })
// })

// app.listen(3001,()=>{
//     console.log("Running Server")
// })
module.exports = collection;