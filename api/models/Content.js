const mongoose = require('./init')

const Content = mongoose.model('Content', {
  title: {
    type: String, 
    required: [true, 'Title is required']
  },
  category: {
    type: String,
    required: [true, 'Category Required']
  },
  bodyPart: {
    type: String,
    required: [true, 'bodyPart Required']
  },
  youtubeURL: {
    type: String
  },
  description: {
    type: String
  }
})

module.exports = Content