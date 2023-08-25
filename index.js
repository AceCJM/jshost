const express = require("express")
const app = express();

const PORT = process.env.PORT
const greeting = "Server is listening on "
app.get('/',(req,res)=>{
    res.json({message:"Hello, from backend!"})
})

app.listen(PORT,()=>{
    console.log(greeting, PORT)
})