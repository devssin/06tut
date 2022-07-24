const express = require('express')
const app = express()
const path = require('path')


const PORT = process.env.PORT || 5000

app.get('^/$|index(.html)?' , (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})


app.get('/new-page(.html)?' , (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})
app.get('/old-page(.html)?' , (req, res) => {
  res.redirect(301,'new-page.html')
})


app.get('/hello(.html)?', (req,res,next) => {
  console.log('attemted to load hello world')
  next()
},(req,res) => {
  res.send('Hello world !')
})

app.get('/*' , (req, res) => {
  res.status(400).sendFile( path.join(__dirname, 'views', '404.html'))
})




app.listen(PORT, () => {
  console.log(`Server running on  http://localhost:${PORT}`)
})
