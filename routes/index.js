var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // XỨ LÝ YÊU CẦU (REQUEST)
  var x,y,z;

  //

  // View - render
  res.render('index', { title: 'Express',
                        x: x,
                        y: y,
                        z: z 
                      });
});

module.exports = router;
