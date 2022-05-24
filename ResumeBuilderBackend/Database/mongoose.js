const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/hci', {
    useUnifiedTopology: true 
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
} )
// mongodb+srv://arbazkhan:arbaz786541@database101.0q3qu.mongodb.net/test