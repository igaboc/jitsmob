const express = require('express')
const Subscriber = require('../models/Subscriber')

const router = new express.Router()

// Read Subscribers
router.get('/subscribers', (req, res) => {
  Subscriber.find()
    .then((subscribers) => {
        res.json(subscribers)
    })
})

router.get('/subscribers/:id', (req,res) => {
    const id = req.params.id
    Subscriber.findById(id)
      .then((subscriber) => {
          if (subscriber) {
            res.json(subscriber)
          }
          else {
              res.status(404).json({ error: `Subscriber not found with id: '${id}'`})
          }
      })
      .catch((error) => {
          res.status(400).json({ error: error.message })
      })
})

// Create Subscriber
router.post('/subscribers', (req,res) => {
  const attributes = req.body
  Subscriber.create(attributes)
    .then((subscriber) => {
        // Success
      res.status(201).json(subscriber)
    })
    .catch((error) => {
        // Failure
      res.status(400).json({ error: error })
    })
})

// Delete Subscriber
router.delete('/subscribers/:id', (req, res) => {
  const id = req.params.id
  Subscriber.findByIdAndRemove(id)
    .then((subscriber) => {
        res.json(subscriber)
    })
    .catch((error) => {
        res.status(404).json({ error: `The subscriber with id '${id}' was not found` }) 
    })
})

module.exports = router