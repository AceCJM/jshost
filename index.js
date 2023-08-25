const express = require("express")
const app = express();

const PORT = 6969
const greeting = "Server is listening on "
app.get('/',(req,res)=>{
    res.json({message:"Hello, from backend!"})
})

app.listen(PORT,()=>{
    console.log(greeting, PORT)
})