const mongoose = require('mongoose')

const url = 'mongodb+srv://limbuprajil123:asdfghjkl@cluster0.wvb16vl.mongodb.net/mydatabase'

mongoose.connect(url)
            .then(()=>{
              console.log('connection successful')
            })
            .catch( err=>{
            console.log('error is', err.message)
})

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

module.exports = Note