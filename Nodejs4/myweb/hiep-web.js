const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

app.engine('handlebars', expressHandlebars.engine({extname: 'handlebars',
 defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/views'))
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.render('home'))

const fortunes = [
  "Chinh phục nỗi sợ hoặc nó sẽ chinh phục bạn.",
  "Sông cần xuân (hnhu thế k hiểu câu này lắm hi).",
  "Đừng sợ những thứ bạn không hiểu.",
  "Bạn sẽ có được những bất ngờ may mắn.",
  "Khi nào chúng có thể, hãy giữ chúng đơn giản.",
]

app.get('/banhqui', (req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
  res.render('banhqui', { fortune: randomFortune })
})

app.use((req, res) => {
  res.status(404)
  res.render('404')
})

app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))
