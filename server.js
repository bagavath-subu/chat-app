const PORT= process.env.PORT || 3000;

const  io= require("socket.io")(PORT);

const user={}

io.on("connection",soc=>{
   
    soc.on('user-name',name=>{
        user[soc.id]=name
        soc.broadcast.emit('User-connected',name)
    })
   
    soc.on('send-chat-msg',msg=>{
        soc.broadcast.emit('chat-msg',{msg,name:user[soc.id]})
    })

    soc.on('disconnect',()=>{
        soc.broadcast.emit('user-disconnected',user[soc.id])
        delete user[soc.id]
    })
})