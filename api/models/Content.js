const mongoose = require('./init')

const Content = mongoose.model('Content', {
  title: {
    type: String, 
    required: [true, 'Title is required']
  },
  subtitle: {
    type: String
  },
  youtubeURL: {
    type: String
  },
  description: {
    type: String, 
    required: [true, 'Title is required']
  }
})

module.exports = Content