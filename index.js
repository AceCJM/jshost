const express = require("express")
const app = express();
const WebSocket = require("ws")
let socket = new WebSocket.Server("wss://millercraft.cyclic.cloud")

socket.on('connection', (ws) => {
    socket.send('Welcome to the WebSocket server!');
});

const PORT = process.env.PORT
const greeting = "Server is listening on "
app.get('/',(req,res)=>{
    res.json({message:"Hello, from backend!"})
})

app.listen(PORT,()=>{
    console.log(greeting, PORT)
})