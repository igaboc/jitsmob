const express = require('express')
const UserWorkout = require('../models/UserWorkout')
const { requireJWT } = require('../middleware/auth')

const router = new express.Router()

// Read list
router.get('/userworkout', requireJWT, (req, res) => {
  UserWorkout.findOne({ user: req.user })
    .populate('contents')
    .then((userWorkout) => {
      if (userWorkout) {
        res.json({ contents: userWorkout.contents })
      }
      else {
        // No user workouts created for this user yet, so just return an empty user workouts
        res.json({ contents: [] })
      }
    })
    .catch((error) => {
      res.status(500).json({ error })
    })
})

// Add content to user workouts
router.post('/userworkout/contents/:contentID', requireJWT, (req, res) => {
  const { contentID } = req.params
  UserWorkout.findOneAndUpdate(
    // Find the users' workout for the signed in user
    { user: req.user },
    // Make these changes
    // $addToSet: https://docs.mongodb.com/manual/reference/operator/update/addToSet/
    { $addToSet: { contents: contentID } },
    // Options when updating
    // upsert: Update if users' workout exists, insert (create users' workout) if not
    // new: Give us the updated users' workout
    { upsert: true, new: true, runValidators: true }
  )
    .populate('contents')
    .then((userWorkout) => {
      res.json({ contents: userWorkout.contents })
    })
    .catch((error) => {
      res.status(400).json({ error })
    })
})

// Remove video from users' workouts
router.delete('/userworkout/contents/:contentID', requireJWT, (req, res) => {
  const { contentID } = req.params
  UserWorkout.findOneAndUpdate(
    // Find the users' workout for the signed in user
    { user: req.user },
    // Make these changes
    // $pull: https://docs.mongodb.com/manual/reference/operator/update/pull/
    { $pull: { contents: contentID } },
    // Options when updating
    // upsert: Update if users' workout exists, insert (create users' workout) if not
    // new: Give us the updated users' workout
    { upsert: true, new: true, runValidators: true }
  )
    .populate('contents')
    .then((userWorkout) => {
      res.json({ contents: userWorkout.contents })
    })
    .catch((error) => {
      res.status(400).json({ error })
    })
})

module.exports = router