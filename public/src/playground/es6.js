class Person {
    constructor(name = 'test', age = 0) {
        this.name = name;
        this.age=age;
    }
    getGreeting() {
        return `Hi I am ${this.name}. I am ${this.age} years old`;
    }
    
}

const me = new Person('rahul', 890);
console.log(me.getGreeting());

