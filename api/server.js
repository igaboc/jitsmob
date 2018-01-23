if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const authMiddleware = require('./middleware/auth')
const authUserMiddleware = require('./middleware/authUser')
const passport = require('passport')

const server = express()

// Middleware Plugins
server.use(bodyParser.json()) // Allows me to have JSON uploads (POST/PUT/PATCH)
server.use(cors()) // Allow access from other origins, i.e. our react front-end
// server.use(authMiddleware.initialize) // Kick passport off
// server.use(authUserMiddleware.initialize) // Kick passport off for user table
server.use(passport.initialize())

// Routes
server.use([
  require('./routes/content'),
  require('./routes/auth'),
  require('./routes/authUser'), 
  require('./routes/userWorkout'), 
  require('./routes/subscriber')
  // require('./routes/wishlist'),
])

// Error handler
server.use((error, req, res, next) => {
  res.json({ error: 
    { message: error.message }
  })
})

// Start the server
server.listen(7000, (error) => {
  if (error) {
    console.error('Error starting', error)
  }
  else {
    console.log('Server started at http://localhost:7000/')
  }
})
