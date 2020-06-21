const express = require('express');
const app = express();
const bodyParser= require('body-parser');

const user = require('./routes/user.route');

app.use(bodyParser.urlencoded({ extended: true }));


app.use('/register', user);

// Make sure you place body-parser before your CRUD handlers!



app.listen(3000, function() {
    console.log('listening on 3000');
});
