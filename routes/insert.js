/**
 * Created by tangentguo on 2016/11/15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('insert', { title: 'insert' });
});

module.exports = router;
