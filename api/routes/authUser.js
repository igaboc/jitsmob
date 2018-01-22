const express = require('express')
const authMiddleware = require('../middleware/authUser')

const router = new express.Router()

// Register
router.post('/authUser/register',
  /* middleware that handles the registration process */
  authMiddleware.register,
  /* json handler */
  authMiddleware.signJWTForUser
)

// Sign in
router.post('/authUser',
  /* middleware that handles the sign in */
  authMiddleware.signIn,
  /* json handler */
  authMiddleware.signJWTForUser
)

module.exports = router