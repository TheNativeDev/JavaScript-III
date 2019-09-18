/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. window-when the value of "this" is the window
 * 2. implicit-"this" is whatever is to the left side of the dot
 * 3. new binding-"this" refers to the constructor function instance
 * 4. explicit binding-when apply, bind and call to force "this" to be a defined object
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function myFunc(prop) {
    console.log(this);
    return prop;
}
myFunc("Window binding");
// Principle 2

// code example for Implicit Binding
const myObj = {
    animal: 'bearded dragon',
    food: function (food) {
        console.log(`${this.animal}s like to eat ${food}`);
        console.log(this);
    }
};
myObj.food('mice');

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}


// Principle 4

// code example for Explicit Binding
function Human(attributes) {
    this.gender = attributes.gender;
    this.age = attributes.age;
    this.name = attributes.name;
    this.hairColor = attributes.hairColor;
    this.speak = function () {
        return `Hello, ny name is ${this.name}`;
    };
}
const Leza = new Human({
    gender: `Female`,
    age: 41,
    name: `Leza`,
    homeTown: `Las Vegas`
});