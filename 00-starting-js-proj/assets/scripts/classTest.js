export default class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `name: ${this.name}\n age: ${this.age}`;
    }
}