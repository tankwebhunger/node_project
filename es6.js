import { promises } from "fs";

//var  重复声明 不能限制修改 函数级

//let  不能重复声明 块级

//函数

let arr=[12,34,4545,676]

arr.sort((n1,n2)=>n1-n2)

console.log(arr)

//数组展开
let arr1=[1,2,4];
let arr2=[3,45,34];

arr=[...arr1,...arr2];

//arr=arr1.concat(arr2)

console.log(arr)


//数组球平均数


let arr3=arr1.reduce((first,scend,index)=>{
    if(index==arr1.length-1){
        return (first+scend)/arr1.length
    }else{
        return first+scend
    }

})

console.log(arr3)


arr.forEach((item,index)=>{
    console.log(`第${index}个：${item}`)
})



//ES7,8,9


//幂操作
 console.log(3**5)

 arr.includes('2')

 //eS9

 rest/spread

// promises  all/race/finally
