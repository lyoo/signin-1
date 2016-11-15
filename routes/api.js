
var express = require('express');
var router = express.Router();
//db.task.find({userList:{$elemMatch:{name:'12312'}}})
var moment  = require('moment');
//moment().format('YYYY:MM:DD hh:mm:ss')
//显示任务列表
router.get('/', function(req, res, next) {
    req.db.task.find({}).toArray(function(err,result){
        res.json({code:0, msg: 'tasks',data:result});
    });
});

//创建任务
//marsliang-kevinqiao-rocdu-jamieyan-tangentguo-goldenchen-rexzhang-suxiawang-xueyuanzhao-gogoluo-liyuanfeng-markluo
router.post('/', function(req, res, next) {
    //console.log(req.body);
    if(req.body.type=='task'){
        var task = req.body;
        task.userList = (function () {
            var result = [];
            task.userList.split('-').forEach(function (el) {
                result.push({name:el})
            });
            return result;
        })();
        console.log(task);
        req.db.task.insert(task, function (err) {
            if(err){
                console.log(err);
            } else{
                res.send({ code:0, msg: '任务创建成功' });
            }
        });
    }else if(req.body.type=='sign'){
        console.log(data);
        var data = {};
        data = Object.assign(data,req.body);
        delete data.type;
        data.now = moment().format('YYYY:MM:DD hh:mm:ss');
        data.time = new Date().getTime();
        console.log(data);
        req.db.sign.insert(data, function (err) {
            res.send({code:0,msg:'sign success'});
        });

    }else{
        res.send({msg:'参数不对'});
    }

});

module.exports = router;
