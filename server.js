const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./config/db')
require('dotenv').config()

const app = express()
 // Connect to database
 db()

// Init Cors
const corsOptions = {
    origin: "http://localhost:5001"
}

app.use(cors(corsOptions))

// Init body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => res.send('Hello World'))

const PORT = (process.env.PORT || 5000)

app.listen(PORT, () => console.log(`Server up and running at PORT ${5000}`))