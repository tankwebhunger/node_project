
//1创建服务 

var server=express.listen(8080);

server.use('1.html',function(req,res){//接受get post
    var user=req.query['user'];

    res.send();
})


//express 依赖于中间件

var expressStatic=require('express-static');


//接口