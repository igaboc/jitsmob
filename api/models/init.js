const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(
  'mongodb://localhost/jitsmob',
  { useMongoClient: true }
)
  .then(() => {
    console.log('successfully connected to database')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB database', error)
  })

module.exports = mongoose