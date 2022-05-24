const express = require ('express');
require('./Database/mongoose')
const routes = require('./routes/ResumeBuilderRoutes'); // import the routes
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());

app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})