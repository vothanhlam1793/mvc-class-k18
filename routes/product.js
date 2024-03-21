var express = require('express');
var router = express.Router();

var products = require('../controllers/productController');

/* GET home page. */
router.get('/', function(req, res, next) {

    // XỨ LÝ YÊU CẦU (REQUEST)
    // ROUTER
    var query = req.query;
    console.log("ID: " + query.id); 

    // CONTROLLER
    // MODEL - PRODUCT
    var product = products.getProductWithId(query.id);

    // VIEW - RENDER
    res.render('product/index', { 
        title: 'Product',
        product: product
    });
});

// PARAMETER
// /product/:id
router.get('/:id', function(req, res, next) {
    // ROUTER
    var id = req.params.id;

    // CONTROLLER
    var product = products.getProductWithId(id);

    res.send(product);
});

module.exports = router;
