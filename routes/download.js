var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('download', {
        title: '下载Particleground.js',
        nav: 2
    });
});

module.exports = router;
