const Chat = require('./models/chat');

let allchats = [
    {
        from : "facebook",
        to : "whatupp",
        msg:  "what's up!bro",
        _created_at : new Date()
    },
    {
        from : "1nf",
        to : "2nf",
        msg:  "i am not pure than you",
        _created_at : new Date()
    },
    {
        from : "lion",
        to : "king",
        msg:  "i am king of king",
        _created_at : new Date()
    },
    {
        from : "victus",
        to : "hp",
        msg:  "battery thick kar dena bro!",
        _created_at : new Date()
    },
]

Chat.insertMany(allchats);