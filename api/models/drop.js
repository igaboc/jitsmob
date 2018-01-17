if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Content = require('./Content')

Content.deleteMany()
.then(() => {
  console.log('deleted all content')
  process.exit() //stop from hanging
})