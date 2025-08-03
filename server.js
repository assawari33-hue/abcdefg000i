const express = require('express')
const path = require('path')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('exe')
})

app.post('/', (req, res) => {
  res.render('exe')
})

const port = process.env.PORT || 3000
app.listen(port)
