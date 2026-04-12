const express = require('express')

const app = express()

app.use((req,res,next) => {
    console.log("request received !!!")
    next()
})

app.use((req,res, next) => {
    //res.send("Hello from express ! ")
    res.json({message : "Hello from express !"})
    next()
})


app.use((req,res) => {
    //res.send("Hello from express ! ")
    console.log("respons has been sent sucessfully!")
})

module.exports = app
