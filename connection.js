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
        await listDatabases(client);
        console.log(dbList , '<====This is the DB list=====>')
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);
