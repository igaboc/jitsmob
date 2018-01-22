const mongoose = require('./init')
const Schema = mongoose.Schema

const userWorkoutSchema = new Schema({
  // Belongs to user
  user: { type: Schema.ObjectId, ref: 'User', unique: true },
  // Has many videos
  contents: [{ type: Schema.ObjectId, ref: 'Content' }]
})

const UserWorkout = mongoose.model('User Workout', userWorkoutSchema)

module.exports = UserWorkout