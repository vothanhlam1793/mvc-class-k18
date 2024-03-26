
const { MongoClient, ServerApiVersion } = require('mongodb');

// Luu y, goi theo  Id
var ObjectId = require('mongodb').ObjectId;

const uri = "mongodb+srv://tal:asrkpVg10!!!@cluster0.mkdhbws.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

/*
  client
*/

async function run() {
    await client.connect(); // Connect to the MongoDB cluster
    console.log('Connected to MongoDB');

    // Chon db
    var db = client.db("mvc");

    // Chon collection
    var collection = db.collection("products");

    // Query
    var products = await collection.find({
        _id: new ObjectId('65fc3b497e027aeb39d699a0')
    }).toArray();

    console.log(products);
    client.close();
}

// run();

async function insertProduct(product) {
    
};

async function updateProduct(id, product) { 
    
}

async function deleteProduct(id) {
    
}

async function getProducts() {  

}
