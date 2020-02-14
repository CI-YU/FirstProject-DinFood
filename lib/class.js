console.log("Hello World");

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    type() {
        console.log(this.name);
        console.log(this.color);
    }
}
let animal = new Animal('cat', 'yellow');

class Bird extends Animal {
    constructor() {
        super('bird', 'yellow');
    }
}