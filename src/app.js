const path = require('path')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
// connecting to db
const USERDB = 'root'
const PASSDB = 'BiBjbFnNnYmma7fj'
const NAMEDB = 'crud-mongo'
mongoose.connect(`mongodb+srv://${USERDB}:${PASSDB}@cluster0.j2yun.mongodb.net/${NAMEDB}?retryWrites=true&w=majority`)
    .then(db => console.log('DB connected'))
    .catch(db => console.log(err))
// importando rutas
const indexRoutes = require('./routes/index')

// settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
// routes
app.use('/', indexRoutes)
// starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
})