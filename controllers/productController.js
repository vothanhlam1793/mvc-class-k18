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

var modelProduct = require('../models/productModel');

// READ 
function getProductWithId(id) {
    console.log("PRODUCT ID: " + products[id]);
    if(products[id] == undefined) {
        return {
            name: "Product not found",
            price: 0,
            description: "Description not found"
        };
    } else {
        return products[id];
    }
};

async function getAllProducts() {
    var products = await modelProduct.run();
    return products;
}

module.exports.getProductWithId = getProductWithId;
module.exports.getAllProducts = getAllProducts;