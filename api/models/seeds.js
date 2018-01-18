if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Content = require('./Content')

Content.create([
  {
    title: 'Important BJJ / MMA Strength & Conditioning',
    category: 'Injury Prevention',
    bodyPart: 'Shoulders',
    youtubeURL: 'https://www.youtube.com/watch?v=RrTotXnVSYs',
    description: 'Here is VIDEO No.1 in this End-Range Strength SERIES!!!! Aimed at keeping you injury free and strong in those end ranges of your joints.'
  },
  {
    title: 'BJJ Injury Prevention Mobility & Body Maintenance',
    category: 'Injury Prevention',
    bodyPart: 'Legs',
    youtubeURL: 'https://www.youtube.com/watch?v=JxdMj7ZeFTY',
    description: 'Common postural issues & problem areas in BJJ/MMA. At JitsMob we want you to understand what to look for when it comes to your body maintenance and how to fix certain issues that may be increasing your chance of injuries on the mats. The aim should be to stay safe and injury free every time you step on the mat. This is going to let you optimize your learning time on the mats in the long run. Oss'
  },
  {
    title: 'HIPS - Part 3D - GLUTES (BJJ/MMA INJURY PREVENTION)',
    category: 'Injury Prevention',
    bodyPart: 'Hips',
    youtubeURL: 'https://www.youtube.com/watch?v=q664b_vhGkg',
    description: 'Here we are looking at your BUTT making sure you have full range-of-motion, a slick open guard and power on tap when needed'
  },
  {
    title: 'HIPS - Part 3C - ADDUCTORS (BJJ / MMA INJURY PREVENTION)',
    category: 'Strength',
    bodyPart: 'Spine',
    youtubeURL: 'https://www.youtube.com/watch?v=oebOPbGdhXQ',
    description: 'ADDUCTORS DONE!! Part 3C of this new series aimed at keeping you injury free, more mobile, more flexible and all round moving better. '
  },
  {
    title: 'HIPS - Part 3B - HAMSTRINGS (BJJ/MMA INJURY PREVENTION)',
    category: 'Strength',
    bodyPart: 'Legs',
    youtubeURL: 'https://www.youtube.com/watch?v=tAt-A8d4AM4',
    description: 'Here is part 3B of this new series aimed at keeping you injury free, more mobile, more flexible and all round moving better. '
  },
  {
    title: 'PARTNER WORKOUT. GIVE IT A GO.',
    category: 'Strength',
    bodyPart: 'Spine',
    youtubeURL: 'https://www.youtube.com/watch?v=rHsFCec8bT0',
    description: 'Try this out and post your time in the comments. Enjoy! '
  },
  {
    title: 'KNEES - Part 2 (BJJ / MMA INJURY PREVENTION)',
    category: 'Strength',
    bodyPart: 'Shoulders',
    youtubeURL: 'https://www.youtube.com/watch?v=yRGKFPbo99o',
    description: "Here's the second part of this new series aimed at keeping you injury free, more mobile, more flexible and all round moving better. "
  },
  {
    title: 'BJJ / MMA STRENGTH & CONDITIONING',
    category: 'Strength',
    bodyPart: 'Legs',
    youtubeURL: 'https://www.youtube.com/watch?v=8_lhVXZuXCg',
    description: 'Just getting a good solid sweat on with some Jiu-Jitsu specific movements. '
  },
  {
    title: 'ANKLES - Part 1 (BJJ / MMA INJURY PREVENTION)',
    category: 'Strength',
    bodyPart: 'Shoulders',
    youtubeURL: 'https://www.youtube.com/watch?v=pua5I3DuN9k',
    description: "Here's the first part of this new series aimed at keeping you injury free, more mobile, more flexible and all round moving better. "
  },
  {
    title: 'BJJ / MMA INJURY PREVENTION SERIES',
    category: 'Strength',
    bodyPart: 'Spine',
    youtubeURL: 'https://www.youtube.com/watch?v=oSzW_Dv3kS8',
    description: 'ALL ABOUT INJURY PREVENTION, BODY MAINTENANCE, MOBILITY & FLEXIBILITY SPECIFICALLY FOR BRAZILIAN JIU-JITSU & MMA. '
  }
])
  .then((contents) => {
    console.log('Created contents', contents)
    process.exit() //stop from hanging
  })
  .catch((error) => {
    console.error(error)
  })