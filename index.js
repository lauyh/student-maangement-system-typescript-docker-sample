const express = require("express")
require('dotenv').config()

const app = express();

app.get('/', (req, res)=>{
    res.status(200).send("<h1>This is a test endpoint<h1>")
})

const port = process.env.PORT || 3000
app.listen(port, () =>{
    console.log("App is running on port " + port + ".")
})