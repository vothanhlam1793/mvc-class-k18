var express = require('express');
var router = express.Router();

var products = require('../controllers/productController');

/* GET home page. */
router.get('/', function(req, res, next) {

    // XỨ LÝ YÊU CẦU (REQUEST)
    // ROUTER
    var query = req.query;


    // CONTROLLER
    // MODEL - PRODUCT
    var product = products.getProductWithId(query.id);

    // VIEW - RENDER
    res.render('product/index', { 
        title: 'Product',
        product: product
    });
});

module.exports = router;
