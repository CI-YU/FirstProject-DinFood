console.log("Hello World");
//宣告Animla類
class Animal {
    //建構子
    constructor(name, foot) {
        this.name = name;
        this.foot = foot;
    }
    toString() {
        //樣板字面值又稱模板字符串
        console.log(`Name:${this.name} foot:${this.foot}`);
    }
    set setname(name){this.name=name;}
    get getname(){return this.nickname};
}
//實例化
let animal = new Animal('cat', 4);
animal.toString();

//建立子類別
//宣告Bird類繼承Animal
class Dog extends Animal {
    constructor(color) {
        //因為Animal類有建構子所以要用super初始Animal super就是Animal的實例
        super('Dog', 4);
        this.color=color;
    }
    toString(){
         //樣板字面值又稱模板字符串
         super.toString();
         console.log(`Name:${this.name} foot:${this.foot} Color:${this.color}`);
    }
    //靜態方法
    static speak(){
        console.log('woof woof');
    }
}
dog=new Dog('black')
dog.toString();
Dog.speak();

//非靜態方法原理
//function Animal() { }
//Animal.pototype.speak=func(){console.log('woof woof');}  //pototype需要new才能調用
//靜態方法
//Animal.speak=func(){console.log('woof woof');} //反之

//對象屬性簡寫
var a=4;
var o={};
var obj={
    a,
    o,
    func1(){console.log(`${this.a},${this.o}`)}
}
obj.func1();