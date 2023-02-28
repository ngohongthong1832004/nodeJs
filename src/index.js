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

console.log('test patch',path.join(__dirname, 'public/img'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => 
  console.log(`Example app listening on port ${port}`)
)