const {MongoClient} = require('mongodb');
require('dotenv').config()

const { URI } = process.env;
console.log(URI)

async function main(){
    const client = new MongoClient(URI);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        // await listDatabases(client);
        await specificDataBaseConnection(client)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
async function specificDataBaseConnection(client){
    let databases = await client.db('sample_airbnb')
    let collection = databases.collection("listingsAndReviews");
    let query = await collection.findOne({
        beds:5
    })
    console.log(query , "<======collection:");
}
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));  
};
 
main().catch(console.error);
