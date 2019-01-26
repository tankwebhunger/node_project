//import { worker } from "cluster";

var reg=/\d+/g;

console.log('asd123qasda343'.match(reg))


//es\\ES5面向对象  ---伪面向对象


//  ES5 函数的形式写对象，多种写法不利用统一协作

function Person(name,age){
    this.name=name;
    this.age=age;

}
Person.prototype.showName=function(){
    console.log(this.name)
}


var p=new Person('laoli',22)

console.log(p.showName())

//继承
function Worker(name,age,job){
    Person.call(this,name,age)
    this.job=job
}
Worker.prototype=new Person();

Worker.prototype.constructor=Worker;

var  w=new Worker('xiansan',22)

w.showName()






//es6 单独类的声明和构造函数的声明。统一方式

class Person {
    constructor (name,age){
        this.name=name;
        this.age=age;
    }

    showName(){
        console.log(this.name)
    }
    showAge(){
        console.log(this.age)
    }
}

var  person=new Person('老李','20')

person.showName()


class Worker extends Person {
    constructor (name,age,job){
        super(name,age)
        this.job=job;
    }
    //方法只需要写自己的，父类方法自动继承


}


