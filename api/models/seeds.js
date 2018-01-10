const Content = require('./Content')

Content.create([
  {
    title: 'Important BJJ / MMA Strength & Conditioning',
    subtitle: 'Strength & Injury Prevention',
    youtubeURL: 'https://www.youtube.com/watch?v=RrTotXnVSYs',
    description: "Here is VIDEO No.1 in this End-Range Strength SERIES!!!! Aimed at keeping you injury free and strong in those end ranges of your joints. ",
  },
  {
    title: 'BJJ Injury Prevention Mobility & Body Maintenance',
    subtitle: 'Strength & Injury Prevention',
    youtubeURL: 'https://www.youtube.com/watch?v=JxdMj7ZeFTY',
    description: "Common postural issues & problem areas in BJJ/MMA. At JitsMob we want you to understand what to look for when it comes to your body maintenance and how to fix certain issues that may be increasing your chance of injuries on the mats. The aim should be to stay safe and injury free every time you step on the mat. This is going to let you optimize your learning time on the mats in the long run. Oss ",
  },
  {
    title: 'HIPS - Part 3D - GLUTES (BJJ/MMA INJURY PREVENTION)',
    subtitle: 'Strength & Injury Prevention',
    youtubeURL: 'https://www.youtube.com/watch?v=q664b_vhGkg',
    description: "Here we're looking at your BUTT making sure you have full range-of-motion, a slick open guard and power on tap when needed ",
  }
])
  .then((products) => {
    console.log('Created products', products)
  })
  .catch((error) => {
    console.error(error)
  })