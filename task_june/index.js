
// TODO Task 1
const animal = {
    speak: function (){
        console.log("speaking")
    }
}

const dog = {}
dog.__proto__ = animal
dog.speak = function () {
    console.log("woof")
}

animal.speak()
dog.speak()

// TODO Task 2

const Person = function (name, age) {
    this.name = name
    this.age = age
    this.prototype = {
        greet: function () {
            console.log("hello")
        }
    }
}

// TODO Task 3

class vehicle {
        drive () {
            console.log("Brrrr")
        }
}

class car extends vehicle {
    honk () {
        console.log("Honks")
    }
}

// TODO Task 4
const obj_1 = {
    name: 'John',
    getname: function () {
        console.log(this.name)
    }
}

const obj_2 = {
    name: 'Lilly',
}

obj_1.getname.call(obj_2)


// TODO Task 5
class a {
    #id = null
    constructor(id) {
        this.id = id
    }

    getId() {
        return this.id
    }
}

// TODO Task 6
class rectangle {
    width
    height
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getArea(){
        return this.width * this.height
    }
}

// TODO Task 7
const userProto = {
    sayHello: function () {
        console.log("Hello")
    }
}

const user1 = Object.create(userProto)
user1.sayHello()

// TODO Task 8
const fun = function () {
    console.log(this.name)
}
const contextFun = fun.bind(obj_1)
contextFun()

//TODO Task 9
class Shape {
    area() {
        throw new Error("Cannot get area of an abstract class")
    }
}

class square extends Shape {
    x
    y
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }

    area() {
        return this.x * this.x;
    }
}

//TODO Task 10
const withFlying = function (obj) {
    obj.fly = function () {
        console.log("flying")
    }
}

const superman = {}
withFlying(superman)
superman.fly()
