const http=require('http');

var server =http.createServer(function(req,res){
    //console.log('来了，大哥')
    console.log(req.url)
    switch (req.url){
        case '/1.html':
        res.write('zhidaole');
        break;
        case '/2.html':
        res.write('zhidaole222');
        break;
        default:
        res.write('404')
        break;

    }

    res.end()
})


server.listen(8080)