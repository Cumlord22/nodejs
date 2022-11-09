const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
 defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => res.render('about'))
// custom 404 page
app.use((req, res) => {
 res.status(404)
 res.render('404')
})
// custom 500 page
app.use((err, req, res, next) => {
 console.error(err.message)
 res.status(500)
 res.render('500')
})