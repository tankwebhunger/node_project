const http=require('http');
const fs=require('fs');
const querystring=require('querystring');//解析get数据
const urlLib=require('url');

http.createServer(function(req,res){

    var  file_name='./www'+req.url;
    var  urlPars=urlLib.parse('http://www.baidu.com/index?a=3&b=6',true);
    console.log(urlPars.pathname,urlPars.query)

    fs.readFile(file_name,function(err,data){
        if(err){
            res.write(404)
        }else{
            res.write(data);
        }
        res.end()
    })

}).listen(8080)