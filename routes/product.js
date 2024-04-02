var express = require('express');
var router = express.Router();

var products = require('../controllers/productController');

/* GET home page. */
router.get('/', async function(req, res, next) {

    // XỨ LÝ YÊU CẦU (REQUEST)
    // ROUTER
    // var query = req.query;
    // console.log("ID: " + query.id); 

    // CONTROLLER
    // MODEL - PRODUCT
    // var product = products.getProductWithId(query.id);
    var product = await products.getAllProducts();
    // VIEW - RENDER
    res.render('product/index', { 
        title: 'Product',
        product: product
    });
});

router.get('/all', async function(req, res, next) {
    // CONTROLLER
    var product = await products.getAllProducts();

    res.send(product);
});

// PARAMETER
// /product/:id
// READ
router.get('/:id', async function(req, res, next) {
    // ROUTER
    var id = req.params.id;
    console.log("ID: ", req.params.id);

    // CONTROLLER
    var product = await products.getProductWithId(id);
    console.log("PRODUCT: ", product);
    res.send(product);
});

// CREATE
router.post("/", async function(req, res){
    console.log("POST");
    var productId = await products.createProduct(req.body);
    res.send({
        productId: productId
    });
});

// UPDATE
router.post("/:id", async function(req, res){
    console.log("UPDATE: ", req.params.id);
    var ret = await products.updateProduct(req.params.id, req.body);
    res.send(ret);
});

//DELETE
router.delete("/:id", async function(req, res){
    console.log("DELETE: ", req.params.id);
    var ret = await products.deleteProduct(req.params.id);
    res.send(ret);
});


module.exports = router;
