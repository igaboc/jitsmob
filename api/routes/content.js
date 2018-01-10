const express = require('express')
const Content = require('../models/Content')

const router = new express.Router()

router.get('/contents', (req, res) => {
  Content.find()
  .then((contents) => {
    res.status(200).json({contents})
  })
  .catch((error)=> {
    res.status(400).json({error: error.message}) //if you return the whole error you may be giving away too much information
  })
})

module.exports = router