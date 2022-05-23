const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/hci', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
})


// mongodb+srv://arbazkhan:arbaz786541@database101.0q3qu.mongodb.net/test