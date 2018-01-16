const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(
  process.env.MONGO_URI,
  { useMongoClient: true }
)
  .then(() => {
    console.log('successfully connected to database')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB database', error)
  })

console.log('Mongo URI', process.env.MONGO_URI)

module.exports = mongoose