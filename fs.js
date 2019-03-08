const fs=require('fs');


fs.readFile('aaa.txt',function(err,data){
    console.log(err,data.toString())
})

fs.writeFile('bbb.txt','asdasdads',function(err){
    console.log(err)
})

//huoqu
function GetRequest() {  
    var url = location.search; //获取url中"?"符后的字串  
    var theRequest = {};  
    if (url.indexOf("?") != -1) {  
       var str = url.substr(1);  
       strs = str.split("&");  
       for(var i = 0; i < strs.length; i ++) {  
          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
       }  
    }  
    return theRequest;  
 }  

 
 //冒泡排序

 function bubblesort(arr){
     let j=arr.length;
     while(j>0){
         let p=0;
         for(let i=0;i<j;i++){
             if(arr[i]>arr[i+1]){
                 p=i
                 let tem=arr[i];
                 arr[i]=arr[i+1];
                 arr[i+1]=tem
             }
         }
         i=p
     }

     return arr
 }
 //二分法查找

 function middleSearch(arr,data){

    var low=0;
    var hight=arr.length-1;
    while(low<=hight){
        var middle=Math.floor((low+hight)/2)
        if(arr[middle]<data){
            low=middle+1
        }else if(arr[middle]>data){
            hight=middle-1
        }else{
            return middle
        }
    }
    return -1
 }
 //数组降维

 function reduce(arr){
     return Array.prototype.concat.apply([],arr);
 }