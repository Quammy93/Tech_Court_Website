const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Website_TechCourt:maxwell300@techcourt.4dlta.mongodb.net/Website_TechCourt?retryWrites=true&w=majority"


const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
