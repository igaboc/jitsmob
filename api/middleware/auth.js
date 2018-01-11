const passport = require('passport')
const JWT = require('jsonwebtoken')
const PassportJwt = require('passport-jwt')
const Admin = require('../models/Admin')

const jwtSecret = '.]y#rg9C43evhEsy'
const jwtAlgorithm = 'HS256'
const jwtExpiresIn = '7 days'

passport.use(Admin.createStrategy())

function register(req, res, next) {
  // Create a fresh user model
  const admin = new Admin({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })
  // Create the user with the specified password
  Admin.register(admin, req.body.password, (error, admin) => {
    if (error) {
      // Our register middleware failed
      next(error)
      return
    }

    // Store user so we can access it in our handler
    req.admin = admin
    // Success!
    next()
  })
}

passport.use(new PassportJwt.Strategy(
  // Options
  {
    // Where will the JWT be passed in the HTTP request?
    // e.g. Authorization: Bearer eyJhbGc…
    jwtFromRequest: PassportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    // What is the secret
    secretOrKey: jwtSecret,
    // What algorithm(s) was used to sign it?
    algorithms: [jwtAlgorithm]
  },
  // When we have a verified token
  (payload, done) => {
    // Find the real user from our database using the `id` in the JWT
    Admin.findById(payload.sub)
      .then((admin) => {
        // If user was found with this id
        if (admin) {
          done(null, admin)
        }
        // If not user was found
        else {
          done(null, false)
        }
      })
      .catch((error) => {
        // If there was a failure
        done(error, false)
      })
  }
))

function signJWTForAdmin(req, res) {
  // Get the user (either just signed in or signed up)
  const admin = req.user
  // Create a signed token
  const token = JWT.sign(
    // Payload
    {
      email: admin.email
    },
    // Secret
    jwtSecret,
    // Options
    {
      algorithm: jwtAlgorithm,
      expiresIn: jwtExpiresIn,
      subject: admin._id.toString()
    }
  )
  // Send the token
  res.json({ token })
}

module.exports = {
  initialize: passport.initialize(),
  register,
  signIn: passport.authenticate('local', { session: false }),
  requireJWT: passport.authenticate('jwt', { session: false }),
  signJWTForAdmin
}
