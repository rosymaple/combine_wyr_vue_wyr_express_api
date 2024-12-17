const express = require('express')
// need to tell express about static files
const path = require('path')

// import the routes in routes/index.js
const indexRouter = require('./routes/index')

// making  a new application server
// creating the web application
const app = express();

// create static files for express
// __dirname is where the client is running in, in client and dist directories
// need static files for scripts that never change
const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles)

// everything sent to indexRouter to be handled
app.use('/', indexRouter)

// start server running
let server = app.listen(process.env.PORT || 3000, function () {
    console.log('Server running on port 3000 ', server.address().port)
})
