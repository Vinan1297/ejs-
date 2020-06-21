const router = require("express").Router();
// const User = require('../Models/user.model');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
    
MongoClient.connect("mongodb+srv://demo:demo12@cluster0.bjdhs.mongodb.net/covid19?retryWrites=true&w=majority", 
{useUnifiedTopology: true}).then(client => {
    console.log('Connected to Database');
    const db = client.db('covid19');
    const userCollection = db.collection('users');
    
    

    router.get('/', (req, res) => {
         res.sendFile(path.join(__dirname, '../html' , '/index.html'));
      });
    
    router.post('/', async (req, res) => {
        console.log(req.body);
        userCollection.insertOne(req.body)
        .then(result => {
          console.log(result);
        })
        .catch(error => console.error(error));
        // const user = new User({
        //     username: req.body.username,
        //     email: req.body.email,
        //     phone: req.body.phone,
        //     password: req.body.password,
        //     dob: req.body.dob
        //     });
        //     console.log(user);
        //     try {
        //         const savedUser = await user.save();
        //         res.send(savedUser);
        //     } catch (error) {
        //         res.status(400).send(error);
        //     }
      });
    });
module.exports = router;