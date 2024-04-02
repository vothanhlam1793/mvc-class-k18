// MODEL - DRAFF

/* 
    PRODUCT: {
        name: "",
        price: "",
        description: ""
    }
*/

/* 
    CUSTOMER: {
        name: "",
        phone: "",
        email: "",
        address: "",
        debt: 0,
        orders: [],
        description: ""x
    }

    METHODS HTTP 
    ----------------
    CREATE ?    POST /product {name, price, description} => INSERT INTO products
    READ ?      GET /product/:id => QUERY
    UPDATE ?    POST /product/:id {name, price, description} => UPDATE
    DELETE ?    DELETE /product/:id 

    CRUD - REST API

*/

var modelProduct = require('../models/productModel');

var products = {
    "id1": {
        name: "Product 1",
        price: 100,
        description: "Description of product 1"
    },
    "id2": {
        name: "Product 2",
        price: 200,
        description: "Description of product 2"
    },
    "id3": {
        name: "Product 3",
        price: 300,
        description: "Description of product 3"
    },
    "id4": {    
        name: "Product 4",
        price: 400,
        description: "Description of product 4"
    
    },
    "id5": {
        name: "Product 5",
        price: 500,
        description: "Description of product 5"
    }
};

// READ 
async function getProductWithId(id) {
    console.log("PRODUCT ID: " + products[id]);
    return await modelProduct.getProductWithId(id);
    // if(products[id] == undefined) {
    //     return {
    //         name: "Product not found",
    //         price: 0,
    //         description: "Description not found"
    //     };
    // } else {
    //     return products[id];
    // }
};

async function getAllProducts() {
    var products = await modelProduct.run();
    return products;
}


async function createProduct(product) {
    return await modelProduct.insertProduct(product);
}

async function deleteProduct(id) {
    return await modelProduct.deleteProduct(id);
}

async function updateProduct(id, product) {
    return await modelProduct.updateProduct(id, product);
}

module.exports.getProductWithId = getProductWithId;
module.exports.getAllProducts = getAllProducts;
module.exports.createProduct = createProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;