const path = require('path')
const express = require('express')
const morgan = require('morgan')
const  { engine } =  require('express-handlebars');


const app = express()

const port = 3001

app.use(morgan('combined'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')))

// add middleware
app.use(express.urlencoded({extended : true})) // form HtML
app.use(express.json()) // Lib fetch axios...

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/search', (req, res) => {
  res.render('search')
})
app.post('/search', (req, res) => {
  console.log(req.body)
  res.send('Post : search')
})

app.listen(port, () => 
  console.log(`Example app listening on port ${port}`)
)