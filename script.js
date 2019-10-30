const soc = io("http://localhost:3000")

const container =document.getElementById("container")
const message =document.getElementById("message")

const name=prompt('What is ur name ?')
appmsg('You Joined');
soc.emit('user-name',name);

soc.on('chat-msg',data=>{
    appmsg(`${data.name}: ${data.msg}`)
})
soc.on('User-connected',name=>{
    appmsg(`${name} joined the chat!!!`)
})
soc.on('user-disconnected',name=>{
    appmsg(`${name} Disconnected`)
})



msgcenter.addEventListener('submit',e=>{
    e.preventDefault();
    const msg=message.value;
    soc.emit('send-chat-msg',msg)
    appmsg(`You: ${msg}`)
    message.value=""
})

function appmsg(message){
    var newdiv=document.createElement('div')
    newdiv.innerText= message
    newdiv.classList.add("ba");
    newdiv.classList.add("stripe-dark");
    newdiv.classList.add("f3");
    
    container.append(newdiv)
}

