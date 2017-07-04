const express = require('express')  
const app = express()
const path = require('path')  
const exphbs = require('express-handlebars')
var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27018/test'

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
})

var assert = require('assert')

app.engine('.hbs', exphbs({  
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')  

app.use((request, response, next) => {  
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {  
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {  
  // Params: 'home' is name of view, name: 'John' is content to render.
  response.render('home', {
    name: 'Chris'
  })
})

app.use((err, request, response, next) => {  
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

app.listen(4021)