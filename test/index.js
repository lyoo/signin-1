/**
 * Created by tangentguo on 2016/11/14.
 */
var express = require('express');
var https = require('https');
var http = require('http');
var url = require('url');
var fs = require('fs');

var app = express();

var options = {
    host: 'www.cpcsign.com',
    key: fs.readFileSync('./bin/2_www.cpcsign.com.key'),
    cert: fs.readFileSync('./bin/1_www.cpcsign.com_bundle.crt')
};

https.createServer(options, app).listen(443);

app.get('/', function(req, res) {
    res.send({msg:'xxxxxxxxxx'});
});