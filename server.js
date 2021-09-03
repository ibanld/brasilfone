const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./config/db')
const helmet = require('helmet')
require('dotenv').config()
const app = express()

 // Connect to database
 db()

// Init Cors
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? "https://brasilfone.herokuapp.com" : "http://localhost:3000"
}

app.use(cors(corsOptions))

app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'"],
        frameSrc: ["'self'"],
        childSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        fontSrc: ["'self'"],
        imgSrc: ["'self'"],
        baseUri: ["'self'"],
      },
    })
  )

// Init body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/api/users', require('./routes/api/user.route'))
app.use('/api/auth', require('./routes/api/auth.route'))

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
    // Set the static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


const PORT = (process.env.PORT || 5000)

app.listen(PORT, () => console.log(`Server up and running at PORT ${PORT}`))