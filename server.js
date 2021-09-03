const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/db')
require('dotenv').config()
const app = express()
const path = require('path')

 // Connect to database
 db()

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
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}


const PORT = (process.env.PORT || 5000)

app.listen(PORT, () => console.log(`Server up and running at PORT ${PORT}`))