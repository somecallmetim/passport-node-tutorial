var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', (req, res)=>{
    res.render('index');
});

module.exports = router;