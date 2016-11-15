/**
 * Created by tangentguo on 2016/11/14.
 */
var mongo = require('mongoskin');
var config = require('../config.json');
//Ô¶³Ìsignin
function getUrl(){
    //console.log(config);
    return config[config.Db];
}
var url = getUrl();
exports.db = mongo.db(url, {native_parser:true});