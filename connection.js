const {MongoClient} = require('mongodb');
require('dotenv').config()


try {
    const { URI } = process.env;
    const client = new MongoClient(URI);
    console.log(client , 'Connected to MongoDB');    
} catch (error) {
    console.log(error, 'There was an error while connecting to the mongo DB');
}

