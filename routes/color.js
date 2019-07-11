var express = require('express');
var router = express.Router();

 

router.get('/color/1', function(req,res){
    const {query} = req
    res.json({ message: "Color 1 is" + query.color})
  });
  
router.get("/color/2", function(req,res){
    const {query} = req
    res.json({ message: "Color 2 is" + query.color})
  });

module.exports = router;