const fs=require('fs');


fs.readFile('aaa.txt',function(err,data){
    console.log(err,data.toString())
})

fs.writeFile('bbb.txt','asdasdads',function(err){
    console.log(err)
})