const mongoose = require('./init')

const Subscriber = mongoose.model('Subscriber', {
  email: { type: String, required: true, unique: true }
})

module.exports = Subscriber