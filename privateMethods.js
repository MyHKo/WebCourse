class Person {
    getAge(){}
    setAge(age){
        this.getAge = () => {
            return age;
        }
    }

    constructor(age){
        this.setAge(age);
    }
}

const person = new Person(12);

console.log(person.getAge());
console.log(person.age);
person.setAge(1);
console.log(person.getAge());
console.log(person.age);
