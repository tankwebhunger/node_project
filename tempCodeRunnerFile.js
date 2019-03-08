let arr1=[1,2,4];
let arr3=arr1.reduce((first,scend,index)=>{
    if(index==arr1.length-1){
        return (first+scend)/arr1.length
    }else{
        return first+scend
    }

})
console.log(arr3)