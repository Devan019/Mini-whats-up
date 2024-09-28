const express = require('express');
const path = require('path');
const Chat = require('./models/chat');
var methodOverride = require('method-override')

const app = express();

app.set("view engine" , "ejs");//always set ejs
app.set("views" , path.join(__dirname , "views"));

app.use(express.static(path.join(__dirname , "public")));//always ue in public
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(methodOverride('_method'))
// async function connect(){
//     await mongoose.connect("mongodb://127.0.0.1:27017/whatsupp");
// }

// connect()
// .then(()=>{
//     console.log("connection sucessfully");
// })
// .catch((err)=>{
//     console.log(err);
// })



let port = 8000;
app.listen(port , ()=>{
    console.log("app is starting");
})

app.get("/", async(req,res)=>{
    let chats = await Chat.find();
    res.render("chat" , {chats});
})

app.get("/chats", async(req,res)=>{
    let chats = await Chat.find();
    res.render("chat" , {chats});
})

app.get("/chats/new" , (req,res)=>{
    res.render("new");
})

app.post("/chats" ,(req,res)=>{
    let {from , to , msg} =  req.body;
    console.log(from , to , msg);

    let date = new Date();
    Chat.create({from : from, to : to , msg : msg , _created_at : date})
    .then((result)=>{
        res.redirect("/chats")
    })
})

app.delete("/chats/:id",(req,res)=>{
    let {id} = req.params;
    Chat.findByIdAndDelete(id)
    .then((result)=>{
        res.redirect("/chats")
    })
})

app.patch("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    console.log(chat);
    res.render("update" , {chat});
})

app.post("/chats/:id/edit",(req,res)=>{
    let {id} = req.params;
    let {msg} = req.body;
    let date = new Date();
    Chat.findByIdAndUpdate({_id : id} ,{msg : msg , _created_at : date})
    .then((result)=>{
        res.redirect("/chats");
    })
})