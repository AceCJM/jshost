const express = require("express")
const app = express();

const PORT = process.env.PORT | 6969;

app.get('/',(req,res)=>{
    res.json({message:"Hello, from backend!"})
})

app.listen(PORT,()=>{
    console.log('Server is listening on ${PORT}...')
})