const Content = require('./Content')

Content.deleteMany()
.then(() => {
  console.log('deleted all content')
  process.exit() //stop from hanging
})