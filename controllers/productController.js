// MODEL - DRAFF

/* 
    {
        name: "",
        price: "",
        description: ""
    }
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
    
    }
};


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

module.exports.getProductWithId = getProductWithId;