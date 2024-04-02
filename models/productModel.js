
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
    var products = await collection.find({}).toArray();

    console.log(products);
    client.close();
    return products;
}

module.exports = {
    run
}
// run();

async function insertProduct(product) {
    await client.connect(); // Connect to the MongoDB cluster
    console.log('Connected to MongoDB');

    // Chon db
    var db = client.db("mvc");

    var collection = db.collection("products");

    var result = await collection.insertOne(product);

    console.log(result);

    client.close();

    return result.insertedId;

};

async function updateProduct(id, product) { 
  await client.connect(); // Connect to the MongoDB cluster
  console.log('Connected to MongoDB');

  // Chon db
  var db = client.db("mvc");

  var collection = db.collection("products");

  var result = await collection.updateOne({
    _id: new ObjectId(id)
  }, {
    $set: product
  });

  console.log(result);

  client.close();

  return result;   
}

async function deleteProduct(id) {
  await client.connect(); // Connect to the MongoDB cluster
  console.log('Connected to MongoDB');

  // Chon db
  var db = client.db("mvc");

  var collection = db.collection("products");

  var result = await collection.deleteOne({
    _id: new ObjectId(id)
  });

  console.log(result);

  client.close();

  return result;

}

async function getProducts() {  
  return await run();
}

async function getProductWithId(id) {
  await client.connect(); // Connect to the MongoDB cluster
    console.log('Connected to MongoDB');

    // Chon db
    var db = client.db("mvc");

    var collection = db.collection("products");

    var result = {};
    try {
      result = await collection.findOne({
        _id: new ObjectId(id)
      });
    } catch (error) { 
      result = {
        name: "Product not found",
        price: 0,
        description: "Description not found"
      };
    }
    if(result == null) {
      result = {
        name: "Product not found",
        price: 0,
        description: "Description not found"
      };
    }
    console.log(result);

    client.close();

    return result;
}

module.exports.insertProduct = insertProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.getProducts = getProducts; 
module.exports.getProductWithId = getProductWithId; 