const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsupp");
}

connect()
.then(()=>{
    console.log("connected sucessfully");
})
.catch((err)=>{
    console.log(err);
})

const chatSchema = new mongoose.Schema({
    from :{
        type : String,
        required : true,
    },
    to :{
        type : String,
        required : true,
    },
    msg : {
        type : String,
        required : true,
    },
    _created_at : {
        type : String,
        require : true,
    }

})

const Chat = new mongoose.model("Chat" , chatSchema);

module.exports = Chat;