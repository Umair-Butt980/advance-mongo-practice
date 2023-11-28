const mongoose = require('mongoose')
require('dotenv').config()

const { MONGO_URI} = process.env;

try {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');    
} catch (error) {
    console.log(error, 'There was an error while connecting to the mongo DB');
}