const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()

app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>res.render('home-page'))

app.get('/register',(req,res)=>res.render('reg-page'))

app.use(bodyParser.urlencoded({extended: false}))
app.get('/thank-you',(req,res)=> res.render('thanks'))

app.post('/process-contact',(req,res)=>{
    console.log(`received contact from ${req.body.name}<${req.body.email}>`)
    res.redirect(303,'/thank-you')  
})
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}\n`))