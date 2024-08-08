require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/search', (req, res)=>{
    res.send("SEARCHED")
})

app.get('/new', (req, res)=>{
    res.send(`<h1>NEW TAB OPENED USING new</h1>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})