const MongoClient = require('mongodb').MongoClient;


module.exports = MongoClient.connect("mongodb+srv://demo:demo12@cluster0.bjdhs.mongodb.net/covid19?retryWrites=true&w=majority", 
{useUnifiedTopology: true}).then(client => {
    console.log('Connected to Database');
    const db = client.db('covid19');
    // const testingCollection = db.collection('covid19');
    // app.use('/register', user);
    return db;
    
});

