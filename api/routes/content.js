const express = require('express')
const Content = require('../models/Content')
const authMiddleware = require('../middleware/auth')

const router = new express.Router()

// Read
router.get('/contents', (req, res) => {
  Content.find()
  .then((contents) => {
    res.status(200).json({contents})
  })
  .catch((error)=> {
    res.status(400).json({error: error.message}) //if you return the whole error you may be giving away too much information
  })
})

// Create
router.post('/contents', authMiddleware.requireJWT, (req, res) => {
  Content.create(req.body)
    .then((content) => {
      res.status(201).json(content)
    })
    .catch((error) => {
      res.status(400).json({ error })
    })
})

// Update
router.put('/contents/:id', authMiddleware.requireJWT, (req, res) => {
  const { id } = req.params
  Content.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    .then((content) => {
      if (content) {
        res.json(content)
      }
      else {
        res.status(404).json({
          error: new Error(`Content with id '${id}' not found`)
        })
      }
    })
    .catch((error) => {
      res.status(400).json({ error })
    })
})

// Remove content from collection
router.delete('/contents/:id', authMiddleware.requireJWT, (req, res) => {
  const { id } = req.params
  Content.findByIdAndRemove(id)
    .then((content) => {
      res.json(content)
    })
    .catch((error) => {
      res.status(404).json({error: `Content with id, '${ id}' was not found` } )
    })
})

module.exports = router